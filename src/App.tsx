import "./App.css";
import Header from "./components/Header";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import NavBar from "./components/NavBar";

function App() {
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
