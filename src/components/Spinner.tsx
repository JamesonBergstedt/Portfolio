import React from "react";
import CircularAnimation from "./CircularAnimation";

const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh]">
      <div className="relative">
        <CircularAnimation startAngle={0} img={"/python_icon.png"} />
        <CircularAnimation startAngle={60} img={"/javascript_icon.png"} />
        <CircularAnimation startAngle={120} img={"/react_icon.png"} />
        <CircularAnimation startAngle={180} img={"/html_icon.png"} />
        <CircularAnimation startAngle={240} img={"/java_icon.png"} />
        <CircularAnimation startAngle={300} img={"/tailwind_icon.png"} />
      </div>
    </div>
  );
};

export default Spinner;
