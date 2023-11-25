import React from "react";
import CircularAnimation from "./CircularAnimation";
import Spinner from "./Spinner";

const Languages = () => {
  return (
    <>
      <div>
        <div className="flex justify-center font-azeret font-semibold text-header_lg mb-[10%]">
          <div>About Me</div>
        </div>

        <div className="flex justify-center w-full">
          <div className="relative  h-fit">
            <div>
              <p className="bg-blue rounded-2xl p-[5%] text-header_sm font-azeret font-semibold text-blue_text relative max-w-[80vw] overflow-auto max-h-[40vh] text-center">
                Highly experienced Automation Engineer and Quality Assurance
                specialist skilled in Python, Java, and React. I am dedicated to
                ensuring software reliability and performance through rigorous
                testing and automation. Proficient in both manual and automated
                testing and a proven track record of designing and executing
                comprehensive test suites that drive defect detection and
                prevention. My expertise extends to full-stack development where
                I have successfully created multiple applications. I excel in
                frontend frameworks such as React, ensuring seamless user
                experiences. Additionally, my backend skills encompass the
                utilization of Python scripting and object oriented development
                with Java. Thriving in Agile environments, I adapt quickly to
                evolving project requirements, consistently contributing to the
                on-time delivery of high-quality software.
              </p>
            </div>
            <div className="bg-lightblue w-full h-full p-[5%] rounded-2xl absolute top-[5%] -z-50 left-[3%]"></div>
          </div>
        </div>
        <div className="flex justify-center font-azeret font-semibold text-header_lg mt-[10%]">
          <div>Languages / Skills</div>
        </div>
        <div className="relative">
          <Spinner />
          <span className="text-header_lg font-azeret absolute top-[25%] left-[15%] animate-pulse">
            Python
          </span>
          <span className="text-header_lg font-azeret absolute top-[50%] left-[5%] animate-pulse">
            Java
          </span>
          <span className="text-header_lg font-azeret absolute top-[80%] left-[18%] animate-pulse">
            React
          </span>

          <span className="text-header_lg font-azeret absolute top-[25%] left-[70%] animate-pulse">
            Javascript
          </span>
          <span className="text-header_lg font-azeret absolute top-[50%] left-[80%] animate-pulse">
            Tailwind
          </span>
          <span className="text-header_lg font-azeret absolute top-[80%] left-[75%] animate-pulse">
            HTML
          </span>
        </div>

        {/* <div className="flex-col items-center justify-center ">
        <div className=" w-full h-fit p-10 rounded-2xl relative m-auto">
          <div className=" flex justify-center relative  min-h-[800px]">
            <Spinner />

          </div>
        </div>
      </div> */}
      </div>
    </>
    // Need to create the circles with the icons of languages in them
  );
};

export default Languages;
