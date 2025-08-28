import { Fragment } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import VideoCaption from "./components/VideoCaption";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <Features />
      <VideoCaption />
      <CallToAction />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
