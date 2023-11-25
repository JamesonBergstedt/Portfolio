import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Languages from "./components/Languages";
import CircularAnimation from "./components/CircularAnimation";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import NavBar from "./components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[url('/gridpatter_op_50.png')]">
        <NavBar />
        <div className="">
          <Header />
          <Languages />
          <Projects />

          <Resume />
        </div>
      </div>
    </>
  );
}

export default App;
