import About from "@/components/About";
import Banner from "@/components/Banner";
import Collaborator from "@/components/Collaborator";
import FAQ from "@/components/FAQ";
import ProductFeatures from "@/components/ProductFeatures";

export default function Home() {
  return (
    <main className="">
      <Banner />
      <ProductFeatures />
      <About />
      <FAQ />
      <Collaborator />
    </main>
  );
}
