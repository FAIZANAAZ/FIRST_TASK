"use client";

import FAQSection from "@/components/landing_page/faqsec";
import FeaturesSection from "@/components/landing_page/features";
import HeroSection from "@/components/landing_page/hero_sec";
import StoriesSection from "@/components/landing_page/stories_sec";
import TestimonialSection from "@/components/landing_page/testimonial-section";
import Tools from "@/components/landing_page/tools";


export default function Home() {
  return (
    <main className="min-h-screen ">
      <HeroSection />
      <FeaturesSection />
      <StoriesSection/>
      <TestimonialSection />
      <div className="px-4 md:px-[80px]">
      <Tools/>
      <FAQSection/>
      </div>
    </main>
  )
}
