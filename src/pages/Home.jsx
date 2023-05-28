import Experience from "../components/home/Experience";
import Hero from "../components/home/Hero";
import Portfolio from "../components/home/Portfolio";
import Footer from "../components/shared/Footer";

export default function HomePage(){
    return (
        <div>
          <Hero/>
          <Experience/>
          <Portfolio/>
          <Footer/>
        </div>
    )
}