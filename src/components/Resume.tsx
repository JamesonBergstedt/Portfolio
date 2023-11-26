import { motion } from "framer-motion";
const Resume = () => {
  return (
    <div className=" relative h-[50vh] ">
      <div className="flex justify-center font-azeret font-semibold text-header_lg mt-[25%]">
        <div>Hire Me!</div>
      </div>

      {/* <div className=" justify-center">
        <a
          href={"/Jameson_Bergstedt_Resume.pdf"}
          download="Jameson Bergstedt Resume"
          target="_blank"
          className=""
        >
          <motion.button
            className="bg-green rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative top-[40%]"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            Download Resume
            <div className="bg-lightgreen w-full h-full p-[2%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
          </motion.button>
        </a>
      </div> */}

      <div className="flex justify-center mt-[5vmin]">
        <motion.div
          className=""
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <a
            href={"/Jameson_Bergstedt_Resume.pdf"}
            download="Jameson Bergstedt Resume"
            target="_blank"
            className=""
          >
            <span className="bg-green rounded-2xl p-[5vmin] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative top-[40%]">
              Download Resume
              <div className="bg-lightgreen w-full h-full p-[5vmin] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
