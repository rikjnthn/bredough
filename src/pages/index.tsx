import { inter } from "@/font";

import HomeHero from "@/components/HomeHero";
import ProductSnippet from "@/components/ProductSnippet";
import ProductAdvantages from "@/components/ProductAdvantages";

export default function Home() {
  return (
    <main className={inter.className}>
      <HomeHero />
      <ProductAdvantages />
      <ProductSnippet />
    </main>
  );
}
