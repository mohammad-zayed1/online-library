import Navbar from '../nav-section/Navbar';
import Hero from "./hero-section/Hero";
import About from "./about-section/About";
import Services from "../services-section/Services";
import Categories from "../categories-section/Categories";
import Authors from "../authors-section/Authors";
import Quotes from "./quotes-section/Quotes";
import Pricing from "./pricing-section/Pricing";
import Contact from "./contact-section/Contact";
import Footer from "../footer-section/Footer";

export default function Landing(){
    return(
        <>
          <Navbar />
      <Hero />
      <About />
      <Services />
      <Categories />
      <Authors />
      <Quotes />
      <Pricing />
      <Contact />
      <Footer />
        </>
    )
}