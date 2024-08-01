import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState } from "react";

const Languages: React.FC<any> = () => {
  // const langRef = useRef()
  // const projectsRef = useRef()
  const [index, setIndex] = useState(0);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <>
      <div id="about" className="mt-[15%]">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center w-full"
        >
          <div className="relative">
            <div className="bg-blue rounded-2xl text-header_sm font-azeret font-semibold p-[5%] text-blue_text relative  min-w-[300px] overflow-auto w-[60vw] max-w-[1000px] text-center ">
              <TypeAnimation
                sequence={[
                  "Hello! Welcome to my website. As you have probably seen, my name is Jameson Bergstedt. ",
                  async () => {
                    await sleep(1000);
                    setIndex((prevIndex) => prevIndex + 1);
                  },
                ]}
                omitDeletionAnimation={true}
                wrapper="p"
                speed={{ type: "keyStrokeDelayInMs", value: 20 }}
                repeat={0}
                style={{}}
                cursor={false}
                className="font-bebas text-center ps-[2%] text-nowrap"
              />
              {index >= 1 && (
                <TypeAnimation
                  sequence={[
                    "I am currently employed at Cisco as a software engineer. There, I work primarily with technologies such as golang, python, docker, kubernetes, and jenkins.",
                    async () => {
                      await sleep(1000);
                      setIndex((prevIndex) => prevIndex + 1);
                    },
                  ]}
                  omitDeletionAnimation={true}
                  wrapper="p"
                  speed={{ type: "keyStrokeDelayInMs", value: 20 }}
                  repeat={0}
                  style={{}}
                  cursor={false}
                  className="font-bebas text-center ps-[2%] text-nowrap"
                />
              )}
              {index >= 2 && (
                <TypeAnimation
                  sequence={[
                    "I am married to my beautiful wife, Kayla, and we are expecting our first child in October, 2024! We love the outdoors (especially the mountains) and I am a BIG motorcycle enthusiast.",
                    async () => {
                      await sleep(1000);
                      setIndex((prevIndex) => prevIndex + 1);
                    },
                  ]}
                  omitDeletionAnimation={true}
                  wrapper="p"
                  speed={{ type: "keyStrokeDelayInMs", value: 20 }}
                  repeat={0}
                  style={{}}
                  cursor={false}
                  className="font-bebas text-center ps-[2%] text-nowrap"
                />
              )}
              {index >= 3 && (
                <TypeAnimation
                  sequence={[
                    "When I am not hanging out with my wife, I spend most of my free time playing competitive video games, pool, and poker...and of course, working on personal projects.",
                    async () => {
                      await sleep(1000);
                      setIndex((prevIndex) => prevIndex + 1);
                    },
                  ]}
                  omitDeletionAnimation={true}
                  wrapper="p"
                  speed={{ type: "keyStrokeDelayInMs", value: 20 }}
                  repeat={0}
                  style={{}}
                  cursor={false}
                  className="font-bebas text-center ps-[2%] text-nowrap"
                />
              )}

              {index >= 4 && (
                <TypeAnimation
                  sequence={[
                    "     If you’d like to chat, send me an invitation on linkedIn!",
                    async () => {
                      await sleep(1000);
                      setIndex((prevIndex) => prevIndex + 1);
                    },
                  ]}
                  omitDeletionAnimation={true}
                  wrapper="p"
                  speed={{ type: "keyStrokeDelayInMs", value: 20 }}
                  repeat={0}
                  style={{}}
                  cursor={false}
                  className="font-bebas text-center ps-[2%] text-nowrap"
                />
              )}
            </div>

            <div className="bg-lightblue w-full h-full p-[5%] rounded-2xl absolute top-[5%] -z-50 left-[3%] "></div>
          </div>
        </motion.div>
      </div>
      {index >= 5 && (
        <div className="flex justify-center gap-[15%] h-[45vh]  items-end">
          <motion.div
            initial={{
              zIndex: 100,
              transform: "translateZ(8px) translateY(-2px)",
            }}
            animate={{
              zIndex: 100,
              transform: "translateZ(32px) translateY(-18px)",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2,
              east: "easeInOut",
            }}
            className=""
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeIn" }}
              className="relative"
            >
              <img
                className="h-[15vw] w-[15vw]  border-[15px] border-yellow object-cover object-left-bottom rounded-full min-h-[80px] min-w-[80px]"
                src="./kayla.jpg"
              />
              <div className="absolute h-[15vw] w-[15vw] bg-lightyellow rounded-full left-[5%] top-[5%] -z-20 min-h-[80px] min-w-[80px]"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              zIndex: 100,
              transform: "translateZ(8px) translateY(-2px)",
            }}
            animate={{
              zIndex: 100,
              transform: "translateZ(32px) translateY(-18px)",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2.25,
              east: "easeInOut",
            }}
            className=""
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5, ease: "easeIn" }}
              className="relative"
            >
              <img
                className="h-[15vw] w-[15vw] border-[15px] border-green object-cover object-top rounded-full min-h-[80px] min-w-[80px]"
                src="./bike.jpg"
              />
              <div className="absolute h-[15vw] w-[15vw] bg-lightgreen rounded-full left-[5%] top-[5%] -z-20 min-h-[80px] min-w-[80px]"></div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              zIndex: 100,
              transform: "translateZ(8px) translateY(-2px)",
            }}
            animate={{
              zIndex: 100,
              transform: "translateZ(32px) translateY(-18px)",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2.5,
              east: "easeInOut",
            }}
            className=""
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3.5, ease: "easeIn" }}
              className="relative"
            >
              <img
                className="h-[15vw] w-[15vw] border-[15px] border-red object-cover object-top rounded-full min-h-[80px] min-w-[80px]"
                src="./poker.JPG"
              />
              <div className="absolute h-[15vw] w-[15vw] bg-lightred rounded-full left-[5%] top-[5%] -z-20 min-h-[80px] min-w-[80px]"></div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Languages;
