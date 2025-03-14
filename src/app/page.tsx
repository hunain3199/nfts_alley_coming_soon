import Header from "@/components/otherComponents/Header";
import Footer from "../components/otherComponents/Footer"
import Card from "../components/otherComponents/Card"
import Hero from "../components/otherComponents/Hero";
export default function Home() {
  return (
    <div className=" bg-gradient-to-r from-[#1E1629] via-[#FF00EA] to-[#1E1629] w-full pb-20">
      <Header />
      <Hero targetDate={new Date("2025-04-25T00:00:00")} />
      <Card />
      <Footer />
    </div>
  );
}
