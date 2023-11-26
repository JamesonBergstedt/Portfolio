import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="flex  justify-center items-center h-[100vh] px-[3%] relative">
        {/* <div className="flex justify-center w-[50%]">
          <div className=" h-[70vmin] w-full relative">
            <div className="bg-green w-fit p-[5%]  rounded-2xl absolute top-[15%] left-[25%]">
              <div className="bg-lightgreen w-full h-full p-[10%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
              <span className="text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap">
                Hi, my name is
              </span>
            </div>
            <div className="bg-yellow w-fit p-[5%] rounded-2xl absolute top-[55%] left-[32%]">
              <div className="bg-lightyellow w-full h-full p-[10%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
              <span className="text-header_lg font-azeret font-semibold text-yellow_text whitespace-nowrap">
                Jameson Bergstedt
              </span>
            </div>
          </div>
        </div> */}
        <div className="h-full">
          {/* <motion.span
            initial={{ opacity: 0, top: "15%" }}
            animate={{ opacity: 1, top: "30%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="bg-green rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative top-[30%]"
          >
            Hi, my name is
            <motion.div
              initial={{ opacity: 0, top: "-70%" }}
              animate={{ opacity: 1, top: "10%" }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="bg-lightgreen w-full h-full p-[10%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"
            ></motion.div>
          </motion.span> */}
          <span className="bg-green rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative top-[25%] left-[0%]">
            Hi, my name is
            <div className="bg-lightgreen w-full h-full p-[10%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
          </span>
          <span className="bg-green rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative top-[45%] left-[10%]">
            Hi, my name is
            <div className="bg-lightgreen w-full h-full p-[10%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
          </span>
          {/* <motion.span
            initial={{ opacity: 0, top: "60%" }}
            animate={{ opacity: 1, top: "40%" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="bg-yellow rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-yellow_text whitespace-nowrap relative top-[40%] left-[15%]"
          >
            Jameson Bergstedt
            <motion.div
              initial={{ opacity: 0, top: "80%" }}
              animate={{ opacity: 1, top: "10%" }}
              transition={{ duration: 3, ease: "easeOut" }}
              className="bg-lightyellow w-full h-full p-[10%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"
            ></motion.div>
          </motion.span> */}
        </div>

        <div className="mb-[10%] ">
          <div className="bg-[url('/jameson_picture.jpg')] h-[35vmin] w-[35vmin]  rounded-full bg-cover relative ">
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
