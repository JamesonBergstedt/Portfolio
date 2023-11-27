import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="flex px-[3%] h-[85vh] relative justify-center mb-[5%]">
        <div className="h-full flex-col justify-center flex w-[50vw] gap-[5%]">
          <div className=" min-h-[15vh]">
            <motion.span
              initial={{ opacity: 0, top: "15%" }}
              animate={{ opacity: 1, top: "30%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="bg-green rounded-2xl p-[5vmin] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative h-fit"
            >
              Hi, my name is
              <motion.div
                initial={{ opacity: 0, top: "-70%" }}
                animate={{ opacity: 1, top: "10%" }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="bg-lightgreen w-full h-full p-[5vmin] rounded-2xl absolute top-[10%] -z-50 left-[5%]"
              ></motion.div>
            </motion.span>
          </div>
          {/* <span className="bg-green rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative top-[25%] left-[10%]">
            Hi, my name is
            <div className="bg-lightgreen w-full h-full p-[10%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
          </span> */}
          {/* <span className="bg-green rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative top-[45%] left-[10%]">
            Hi, my name is
            <div className="bg-lightgreen w-full h-full p-[10%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
          </span> */}
          <div className=" min-h-[15vh] ml-[5vw]">
            <motion.span
              initial={{ opacity: 0, top: "60%" }}
              animate={{ opacity: 1, top: "40%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="bg-yellow rounded-2xl p-[5vmin] text-header_lg font-azeret font-semibold text-yellow_text whitespace-nowrap relative h-fit"
            >
              Jameson Bergstedt
              <motion.div
                initial={{ opacity: 0, top: "80%" }}
                animate={{ opacity: 1, top: "10%" }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="bg-lightyellow w-full h-full p-[5vmin] rounded-2xl absolute top-[10%] -z-50 left-[5%]"
              ></motion.div>
            </motion.span>
          </div>
        </div>

        <div className=" flex items-center mt-[15vh]">
          <div className="bg-[url('/jameson_picture.jpg')] h-[35vmin] w-[35vmin]  rounded-full bg-cover relative top-[-10%]">
            <div className=" bg-lightred rounded-full absolute h-[36vmin] w-[36vmin] bottom-[-5%] left-[3%] -z-50"></div>
          </div>
        </div>
        {/* <div>
          <img
            src="/astro.svg"
            className="absolute h-[90vmin] w-[90vmin] top-[78%] left-[0%]"
          />
        </div>
        <div>
          <img
            src="/satelite.svg"
            className="absolute h-[40vmin] w-[40vmin] top-[90%] left-[70%]"
          />
        </div> */}
      </div>
    </>
  );
};

export default Header;
