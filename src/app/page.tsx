import About from "@/components/About";
import BestSellers from "@/components/BestSellers";
import CopyRight from "@/components/CopyRight";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HooksSection from "@/components/HooksSection";
import Navbar from "@/components/Navbar";
import OurCustomers from "@/components/OurCustomers";
import OurSpecials from "@/components/OurSpecials";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <About />
      <BestSellers />
      <HooksSection />
      <OurCustomers />
      <Footer />
      <CopyRight year={2025} />
    </div>
  );
}
