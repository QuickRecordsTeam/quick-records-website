import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <CallToAction />
      <Pricing />
      <FAQ />

      <Testimonials />
      <Contact />
      <Footer />
      {/* <Scrollable /> */}
    </Fragment>
  );
}

export default App;
