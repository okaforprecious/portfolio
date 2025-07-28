import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Skill from "./Components/Skill"
import HeroSection from "./Components/Herosection";
import BestProjects from "./Components/BestProjects";

function App() {
  const [count, setCount] = useState(0);

  return <>
  
  {/* <Hero/> */}
  <HeroSection/>
  <Skill/>
  <BestProjects/>
  
  
  
  
  
  
  
  
  </>;
}

export default App;
