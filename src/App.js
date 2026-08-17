import About from "./components/About";
import Awards from "./components/Awards";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <main className="max-w-2xl mx-auto px-6">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Awards />
      </main>
      <Footer />
    </div>
  );
};

export default App;
