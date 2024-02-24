import About from "@/components/About";
import Banner from "@/components/Banner";
import Collaborator from "@/components/Collaborator";
import FAQ from "@/components/faq/FAQ";
import ProductFeatures from "@/components/ProductFeatures";


const Home = () => {
  return (
    <>
    <Banner />
      <ProductFeatures />
      <About />
      <FAQ />
      <Collaborator />
      
    </>
  );
};

export default Home;
