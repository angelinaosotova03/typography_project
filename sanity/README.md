# Sanity CMS — setup (not yet connected)

The schema files in `schemaTypes/` describe the data model from the project
plan (`category`, `product`, `lead`, `siteSettings`). They are written as
plain, dependency-free reference objects — deliberately **not** wired into
the Next.js app yet, and excluded from the TypeScript build
(`tsconfig.json` → `exclude`), because there is no real Sanity project to
connect to. This keeps `npm run build` green without Sanity credentials.

## To activate this CMS

1. `npm install sanity @sanity/vision next-sanity styled-components`
2. Create a project at https://www.sanity.io/manage (or run
   `npx sanity@latest init` from the repo root) — note the **Project ID**
   and **dataset name** (usually `production`).
3. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_READ_TOKEN=xxxx   # only if the dataset is private
   SANITY_REVALIDATE_SECRET=xxxx # shared secret for the webhook below
   ```
4. Convert each file in `schemaTypes/` to real Sanity schema definitions
   using `defineType`/`defineField` from `sanity` (the field shapes below
   already match 1:1 — it's a mechanical conversion, not a redesign).
5. Create `sanity/sanity.config.ts` registering the schema types, and
   `src/app/studio/[[...tool]]/page.tsx` embedding the Studio (see
   `next-sanity`'s "Embedded Studio" docs) — this becomes the manager's
   admin panel, no separate hosting needed.
6. Replace the local mock functions in `src/lib/catalog.ts`
   (`getCategories`, `getCategory`, `getProducts`, `getProduct`,
   `getFeaturedProducts`) with GROQ queries via a Sanity client
   (`sanity/lib/client.ts`) — every call site already awaits these
   functions, so no page/component code needs to change.
7. Add an on-publish webhook in the Sanity project pointing at
   `/api/revalidate` (to be created) so catalog/price edits go live via
   ISR without a redeploy.
8. Wire `src/app/api/lead/route.ts` to also write a `lead` document via the
   Sanity client, so submitted quote requests show up in the same Studio.

Remove `"sanity"` from `tsconfig.json`'s `exclude` array once real
`defineType`/`defineField` schemas are in place and the packages above are
installed.
