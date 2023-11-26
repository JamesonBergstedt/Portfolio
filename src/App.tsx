import "./App.css";
// import Header from "./components/Header";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import NavBar from "./components/NavBar";
import { useRef } from "react";

function App() {
  const aboutRef = useRef<HTMLElement>();
  // const langRef = useRef()
  // const projectsRef = useRef()

  return (
    <>
      <div>
        <NavBar refference={aboutRef} />
      </div>
      <div className="bg-[url('/gridpatter_op_50.png')] flex justify-center">
        <div className=" ">
          <div className="max-w-[1800px]">
            {/* <Header /> */}
            <Languages refference={aboutRef} />
            <Projects />

            <Resume />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
