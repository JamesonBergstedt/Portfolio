import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div>
      <div
        className="flex justify-center font-azeret font-semibold text-header_lg my-[10%] pt-[2%]"
        id="projects"
      >
        <div>Projects</div>
      </div>

      <div className="flex justify-center gap-[10%]">
        <motion.div
          className=""
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="bg-red rounded-2xl p-[5vmin] text-header_lg font-azeret font-semibold text-red_text whitespace-nowrap relative top-[40%]">
            Simple Scratch
            <div className="bg-lightred w-full h-full p-[5vmin] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
          </span>
        </motion.div>

        <motion.div
          className=""
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="bg-red rounded-2xl p-[5vmin] text-header_lg font-azeret font-semibold text-red_text whitespace-nowrap relative top-[40%]">
            Stego File
            <div className="bg-lightred w-full h-full p-[5vmin] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
