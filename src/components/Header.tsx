import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //1 char = 100ms
  const sequence = [
    // 1900 + 3000 + 1900
    "Full Stack Engineer",
    3000,
    "",
    700,

    // 1300 + 3000 + 1300
    "Web Developer",
    //13
    3000,
    "",
    1900,

    // 1700 + 3000 + 1700
    "Python Enthusiast",
    //17
    3000,
    "",
    1100,

    // 1600 + 3000 + 1600
    "Dev Ops Tinkerer",
    //16
    3000,
    "",
    1300,

    // 700 + 3000 + 700
    "Husband",
    //7
    3000,
    "",
    3100,

    // 600 + 3000 + 600
    "Father",
    //6
    3000,
    "",
    3000,
  ];
  const times = [3325, 2250, 2950, 2800, 1200, 1100];

  useEffect(() => {
    let delay = times[currentIndex];
    console.log(delay);
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (sequence.length / 2));
    }, 7550); // Change this to match the delay in the sequence

    return () => clearInterval(interval);
  }, [sequence.length, currentIndex]);

  const colorClasses = [
    "#DB4437", // Red
    "#FDC82F", // Yellow
    "#4285F4", // Blue
    "#0F9D58", // Green
  ];
  return (
    <>
      <div className="flex px-[3%] h-[60vh] gap-[10%] min-h-[] relative justify-center mb-[5%]">
        <div className="h-full flex-col justify-center flex w-[50vw] lg:gap-[5%]">
          <motion.div
            initial={{
              zIndex: 100,
              transform: "translateZ(8px) translateY(-2px)",
            }}
            animate={{
              zIndex: 100,
              transform: "translateZ(32px) translateY(-8px)",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              east: "easeInOut",
            }}
            className=" min-h-[15vh] flex"
          >
            <div className=" min-h-[15vh] ml-[5vw]">
              <motion.span
                initial={{ opacity: 0, top: "60%" }}
                animate={{ opacity: 1, top: "40%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="bg-green rounded-2xl p-[5vmin] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative h-fit"
              >
                Hi, my name is
                <motion.div
                  initial={{ opacity: 0, top: "80%" }}
                  animate={{ opacity: 1, top: "10%" }}
                  transition={{ duration: 3, ease: "easeOut" }}
                  className="bg-lightgreen w-full h-full p-[5vmin] rounded-2xl absolute top-[10%] -z-50 left-[5%] "
                ></motion.div>
              </motion.span>
            </div>
          </motion.div>
          {/* <span className="bg-green rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative top-[25%] left-[10%]">
            Hi, my name is
            <div className="bg-lightgreen w-full h-full p-[10%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
          </span> */}
          {/* <span className="bg-green rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative top-[45%] left-[10%]">
            Hi, my name is
            <div className="bg-lightgreen w-full h-full p-[10%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
          </span> */}
          <motion.div
            initial={{
              zIndex: 100,
              transform: "translateZ(8px) translateY(-2px)",
            }}
            animate={{
              zIndex: 100,
              transform: "translateZ(32px) translateY(-8px)",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              east: "easeInOut",
            }}
            className=" min-h-[15vh] flex"
          >
            <div className=" min-h-[15vh] ml-[5vw]">
              <motion.span
                initial={{ opacity: 0, top: "60%" }}
                animate={{ opacity: 1, top: "40%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="bg-yellow rounded-2xl p-[5vmin] text-header_lg font-azeret font-semibold text-yellow_text whitespace-nowrap relative h-fit lg:left-[10%]"
              >
                Jameson Bergstedt
                <motion.div
                  initial={{ opacity: 0, top: "80%" }}
                  animate={{ opacity: 1, top: "10%" }}
                  transition={{ duration: 3, ease: "easeOut" }}
                  className="bg-lightyellow w-full h-full p-[5vmin] rounded-2xl absolute top-[10%] -z-50 left-[5%] "
                ></motion.div>
              </motion.span>
            </div>
          </motion.div>
        </div>

        <div className=" flex items-center mt-[15vh]">
          <div className="bg-[url('/jameson_picture.jpg')] h-[35vmin] w-[35vmin] border-[2vmin] border-red  rounded-full bg-cover relative top-[-10%]">
            <div className=" bg-lightred rounded-full absolute h-[35vmin] w-[35vmin]  -z-50"></div>
          </div>
        </div>
      </div>
      <div className="  text-header_lg text-black  font-azeret w-full">
        <div className="mx-auto w-fit whitespace-nowrap">
          <span className="">I am a...</span>
          <span
            style={{
              color: `${colorClasses[currentIndex % colorClasses.length]}`,
            }}
            className="text-nowrap font-semibold "
          >
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={{ type: "keyStrokeDelayInMs", value: 100 }}
              repeat={Infinity}
              style={{}}
              className={`font-bebas text-header_lg text-center ps-[2%] text-nowrap ${
                colorClasses[currentIndex % colorClasses.length]
              }`}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
