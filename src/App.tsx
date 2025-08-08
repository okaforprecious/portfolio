import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Skill from "./Components/Skill"
import HeroSection from "./Components/Herosection";
import BestProjects from "./Components/BestProjects";
import AboutMe from "./Components/Aboutme";
import ContactMe from "./Components/ContactMe";
import TechStack from "./Components/TechStack";
import CertEducation from "./Components/CertEducation";
import Resume from "./Components/Resume";


function App() {
  const [count, setCount] = useState(0);

  return <>
  
  {/* <Hero/> */}
  <HeroSection/>
  <AboutMe/>
  {/* <Skill/> */}
  <TechStack/>
  <BestProjects/>
  <CertEducation/>
  <Resume/>
  <ContactMe/>
  
  
  
  
  
  
  
  
  </>;
}

export default App;
