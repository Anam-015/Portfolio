import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DecorativeLeaves from './components/DecorativeLeaves';

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-between selection:bg-[#d8b4fe] selection:text-[#130722]">
      {/* Decorative Lavender & White Leaves in the background */}
      <DecorativeLeaves />

      {/* 1. Navbar */}
      <Navbar />

      <div className="flex-grow z-10">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Projects */}
        <Projects />

        {/* 5. Contact */}
        <Contact />
      </div>

      {/* 6. Footer */}
      <Footer />
    </main>
  );
}
