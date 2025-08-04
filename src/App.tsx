import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WebsiteTypes from './components/WebsiteTypes';
import Technologies from './components/Technologies';
import MaintenanceServices from './components/MaintenanceServices';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WebsiteTypes />
      <Technologies />
      <MaintenanceServices />
      <Portfolio />
      <Process />
      <Pricing />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;