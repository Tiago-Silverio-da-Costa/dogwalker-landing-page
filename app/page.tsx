import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Princing from "@/components/princing";

function Content() {

  return (
    <>
      <Hero />
      <Contact />
      <Princing />
    </>
  );
}

export default async function Home() {

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}
