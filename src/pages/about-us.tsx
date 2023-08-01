import AboutUsHero from "@/components/AboutUsHero";
import CompanyExplanation from "@/components/CompanyExplanation";
import { inter } from "@/font";

export default function AboutUs() {
  return (
    <main className={inter.className}>
      <AboutUsHero />
      <CompanyExplanation />
    </main>
  )
}
