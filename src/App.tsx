import { Fragment, lazy, Suspense } from "react";
import HowItWorks from "./components/HowItWorks";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Hero = lazy(() => import("./components/Hero"));
const Features = lazy(() => import("./components/Features"));
const VideoCaption = lazy(() => import("./components/VideoCaption"));
const CallToAction = lazy(() => import("./components/CallToAction"));
const FAQ = lazy(() => import("./components/FAQ"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));
function App() {
  return (
    <Fragment>
      <Suspense fallback={<div id="preloader"></div>}>
        <Header />
        <Hero />
        <HowItWorks />
        <Features />
        <VideoCaption />
        <CallToAction />
        <FAQ />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>
    </Fragment>
  );
}

export default App;
