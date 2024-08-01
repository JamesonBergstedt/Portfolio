import Spinner from "./Spinner";
import { motion } from "framer-motion";
import { useState } from "react";

const Languages: React.FC<any> = () => {
  const [openLanguage, setOpenLanguage] = useState(false);

  const slideVars = () => {
    if (!openLanguage) {
      return {
        initial: {
          zIndex: 100,
          transform: "translateZ(8px) translateY(-2px)",
        },
        animate: {
          zIndex: 100,
          transform: "translateZ(32px) translateY(-18px)",
        },
        transition: {
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2.5,
          ease: "easeInOut",
        },
      };
    } else {
      return {
        initial: {
          zIndex: 100,
        },
        animate: {
          x: "200%",
          y: "-10%",
          zIndex: 100,
        },
        transition: {
          duration: 2.5,
          ease: "easeInOut",
        },
      };
    }
  };

  return (
    <>
      <div id="languages" className="mt-[25%] flex justify-center items-center">
        <div className="flex  flex-wrap justify-center items-center w-full">
          <motion.div
            initial={slideVars().initial}
            animate={slideVars().animate}
            transition={slideVars().transition}
            style={slideVars().style}
            className="w-[30vw] h-[20vw] relative min-w-[150px] min-h-[100px]"
            id="card1"
            onClick={() => setOpenLanguage(!openLanguage)}
          >
            <div className="h-full w-full relative group">
              <div className="absolute h-[80%] w-[80%] bg-yellow z-40 rounded-2xl group-hover:scale-105 duration-100 transition-all ease-in cursor-pointer">
                <span className="text-yellow_text text-header_lg flex justify-center items-center h-full font-azeret">
                  Languages
                </span>
              </div>
              <div className="absolute h-[80%] w-[80%] bg-lightyellow top-[3%] z-10 left-[3%] rounded-2xl group-hover:scale-105 duration-100 transition-all ease-in"></div>
            </div>
          </motion.div>

          <motion.div
            key={0}
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
              duration: 2.25,
              ease: "easeInOut",
            }}
            className="w-[30vw] h-[20vw] relative min-w-[150px] min-h-[100px]"
            id="card2"
          >
            <div className="h-[80%] w-[80%] relative group">
              <div className="absolute h-full w-full bg-green z-40 rounded-2xl group-hover:scale-105 duration-100 transition-all ease-in cursor-pointer">
                <span className="text-green_text text-header_lg flex justify-center items-center h-full font-azeret">
                  Front-End
                </span>
              </div>
              <div className="absolute h-full w-full bg-lightgreen top-[3%] z-10 left-[3%] rounded-2xl group-hover:scale-105 duration-100 transition-all ease-in"></div>
            </div>
          </motion.div>

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
              duration: 2.25,
              ease: "easeInOut",
            }}
            className="w-[30vw] h-[20vw] relative min-w-[150px] min-h-[100px]"
            id="card3"
          >
            <div className="h-[80%] w-[80%] relative group">
              <div className="absolute h-full w-full bg-red z-40 rounded-2xl group-hover:scale-105 duration-100 transition-all ease-in cursor-pointer bottom-[-25%] right-[-25%]">
                <span className="text-red_text text-header_lg flex justify-center items-center h-full font-azeret">
                  Cloud
                </span>
              </div>
              <div className="absolute h-full w-full bg-lightred bottom-[-28%] right-[-28%] z-10 rounded-2xl group-hover:scale-105 duration-100 transition-all ease-in"></div>
            </div>
          </motion.div>

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
              duration: 3,
              ease: "easeInOut",
            }}
            className="w-[30vw] h-[20vw] relative min-w-[150px] min-h-[100px]"
            id="card4"
          >
            <div className="h-[80%] w-[80%] relative group">
              <div className="absolute h-full w-full bg-blue z-40 rounded-2xl group-hover:scale-105 duration-100 transition-all ease-in cursor-pointer bottom-[-25%] right-[-25%]">
                <span className="text-blue_text text-header_lg flex justify-center items-center h-full font-azeret">
                  Dev Ops
                </span>
              </div>
              <div className="absolute h-full w-full bg-lightblue bottom-[-28%] right-[-28%] z-10 rounded-2xl group-hover:scale-105 duration-100 transition-all ease-in"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Languages;
