import Spinner from "./Spinner";
import { motion } from "framer-motion";

const Languages: React.FC<any> = () => {
  // const langRef = useRef()
  // const projectsRef = useRef()

  return (
    <>
      <div id="about">
        <div className="flex justify-center font-azeret font-semibold text-header_lg pt-[7%]">
          <div>About Me</div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center w-full"
        >
          <div className="relative  h-fit mb-[10%]">
            <div>
              <p className="bg-blue rounded-2xl text-header_sm font-azeret font-semibold p-[5%] text-blue_text relative max-w-[80vw] overflow-auto max-h-[50vh] text-center ">
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
        </motion.div>
        <div
          className="flex justify-center font-azeret font-semibold text-header_lg mt-[10%] pt-[7%]"
          id="languages"
        >
          <div>Languages / Skills</div>
        </div>
        <div className="relative font-bold">
          <Spinner />
          <span className="text-header_lg font-azeret absolute top-[25%] left-[15%] animate-pulse drop-shadow-[0_15px_3px_rgba(0,0,0,0.25)]">
            Python
          </span>
          <span className="text-header_lg font-azeret absolute top-[50%] left-[5%] animate-pulse drop-shadow-[0_15px_3px_rgba(0,0,0,0.25)]">
            Java
          </span>
          <span className="text-header_lg font-azeret absolute top-[80%] left-[18%] animate-pulse drop-shadow-[0_15px_3px_rgba(0,0,0,0.25)]">
            React
          </span>

          <span className="text-header_lg font-azeret absolute top-[25%] left-[70%] animate-pulse drop-shadow-[0_15px_3px_rgba(0,0,0,0.25)]">
            Javascript
          </span>
          <span className="text-header_lg font-azeret absolute top-[50%] left-[80%] animate-pulse drop-shadow-[0_15px_3px_rgba(0,0,0,0.25)]">
            Tailwind
          </span>
          <span className="text-header_lg font-azeret absolute top-[80%] left-[75%] animate-pulse drop-shadow-[0_15px_3px_rgba(0,0,0,0.25)]">
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
