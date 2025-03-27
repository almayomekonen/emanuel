import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Footer from "./components/Footer";
import Particles from "./components/Particles";

function App() {
  return (
    <div className="app">
      <Particles />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
