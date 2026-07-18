import { Hero } from "@/components/landing/Hero";
import { BookOpen } from "@/components/landing/BookOpen/BookOpen";
import { BrochureReveal } from "@/components/landing/BrochureReveal";
import { Process } from "@/components/landing/Process";
import { WorkGallery } from "@/components/landing/WorkGallery";
import { CTAToShop } from "@/components/landing/CTAToShop";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BookOpen />
      <BrochureReveal />
      <Process />
      <WorkGallery />
      <CTAToShop />
    </>
  );
}
