/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */
import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Resgister GSAP plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skill from "./Components/Skill";
import Work from "./Components/Work";
import Review from "./Components/Review";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "buttom 60%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
