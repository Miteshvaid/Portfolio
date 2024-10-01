import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Extracurricular from "./components/Extracurricular";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Hobby from "./components/Hobby";
import Projects from "./components/project/Projects";
function App() {
  return (
    <div className="bg-gray-100 px-3 py-8">
      <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-lg">
        <Header />
        <AboutMe />
        <Projects />
        <Skills />
        <Education />
        <Hobby />
        <Extracurricular />
        <Contact />
      </div>
    </div>
  );
}

export default App;
