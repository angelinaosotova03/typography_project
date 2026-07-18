import { cn } from "@/lib/utils";

export function FloatingBadge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-2xl border border-ink/10 bg-paper/90 px-4 py-3 text-sm shadow-[0_12px_30px_-12px_rgba(33,38,58,0.3)] backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
