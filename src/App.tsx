import "./App.css";
import Header from "./components/Header";
import Languages from "./components/Languages";
// import Projects from "./components/Projects";
// import Resume from "./components/Resume";
import NavBar from "./components/NavBar";
// import About from "./components/About";
import { useRef } from "react";

function App() {
  const aboutRef = useRef<HTMLElement>();
  // const langRef = useRef()
  // const projectsRef = useRef()

  return (
    <>
      <div className="bg-[url('/gridpatter_op_50.png')]">
        <div className="">
          <NavBar className="w-[100vw]" refference={aboutRef} />

          <div className="max-w-[1800px] m-auto">
            <Header />
            {/* <About /> */}
            <Languages refference={aboutRef} />
            {/* <Projects /> */}

            {/* <Resume /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
