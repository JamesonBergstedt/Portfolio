import Spinner from "./Spinner";
import { delay, easeInOut, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "./Card";

const Languages: React.FC<any> = () => {
  const [yellowCard, setYellowCard] = useState(false);
  const [greenCard, setGreenCard] = useState(false);
  const [redCard, setRedCard] = useState(false);
  const [blueCard, setBlueCard] = useState(false);
  const [cardActive, setCardActive] = useState(false);

  const [blueCount, setBlueCount] = useState(0);
  const [redCount, setRedCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);

  const [blueKey, setBlueKey] = useState(400);
  const [redKey, setRedKey] = useState(300);
  const [greenKey, setGreenKey] = useState(200);
  const [yellowKey, setYellowKey] = useState(100);

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    if (blueCount == 2) {
      const asyncFunction = async () => {
        await sleep(1700);

        setBlueCount((prevCount) => (prevCount + 1) % 3);
        setBlueKey((prev) => prev + 1);
      };
      asyncFunction();
    }

    if (redCount == 2) {
      const asyncFunction = async () => {
        await sleep(1700);

        setRedCount((prevCount) => (prevCount + 1) % 3);
        setRedKey((prev) => prev + 1);
      };
      asyncFunction();
    }

    if (greenCount == 2) {
      const asyncFunction = async () => {
        await sleep(1700);

        setGreenCount((prevCount) => (prevCount + 1) % 3);
        setGreenKey((prev) => prev + 1);
      };
      asyncFunction();
    }

    if (yellowCount == 2) {
      const asyncFunction = async () => {
        await sleep(1700);

        setYellowCount((prevCount) => (prevCount + 1) % 3);
        setYellowKey((prev) => prev + 1);
      };
      asyncFunction();
    }
  }, [blueCount, redCount, greenCount, yellowCount]);
  const slideVars = (id) => {
    if (id == "yellow") {
      if (yellowCount == 0) {
        return {
          initial: {
            x: "-20%",
            y: "10%",
          },
          animate: {
            x: "-20%",
            y: "15%",
          },
          transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "easeInOut",
            delay: 0.25,
          },
          exit: {
            x: "-20%",
            y: "10%",
          },
        };
      } else if (yellowCount == 1) {
        return {
          initial: {
            x: "-20%",
            y: "15%",
          },
          animate: {
            x: "50%",
            y: "-30%",
            scale: 0.75,
          },
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "-20%",
            y: "10%",
            opacity: 0,
          },
        };
      } else if (yellowCount == 2) {
        return {
          initial: {
            x: "50%",
            y: "-30%",
          },
          animate: {
            x: "-20%",
            y: "10%",
          },
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "-20%",
            y: "15%",
          },
        };
      }
    } else if (id == "green") {
      if (greenCount == 0) {
        return {
          initial: {
            x: "20%",
            y: "10%",
          },
          animate: {
            x: "20%",
            y: "15%",
          },
          transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "easeInOut",
            delay: 0.55,
          },
          exit: {
            x: "20%",
            y: "10%",
          },
        };
      } else if (greenCount == 1) {
        return {
          initial: {
            x: "20%",
            y: "15%",
          },
          animate: {
            x: "-50%",
            y: "-30%",
            scale: 0.75,
          },
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "20%",
            y: "10%",
            opacity: 0,
          },
        };
      } else if (greenCount == 2) {
        return {
          initial: {
            x: "50%",
            y: "-130%",
          },
          animate: {
            x: "20%",
            y: "10%",
          },
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "-20%",
            y: "15%",
          },
        };
      }
    } else if (id == "red") {
      if (redCount == 0) {
        return {
          initial: {
            x: "-20%",
            y: "50%",
          },
          animate: {
            x: "-20%",
            y: "55%",
          },
          transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "easeInOut",
            delay: 0.15,
          },
          exit: {
            x: "20%",
            y: "60%",
          },
        };
      } else if (redCount == 1) {
        return {
          initial: {
            x: "-20%",
            y: "60%",
          },
          animate: {
            x: "50%",
            y: "-130%",
            scale: 0.75,
          },
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "-20%",
            y: "60%",
            opacity: 0,
          },
        };
      } else if (redCount == 2) {
        return {
          initial: {
            x: "50%",
            y: "-130%",
          },
          animate: {
            x: "-20%",
            y: "50%",
          },
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "-20%",
            y: "60%",
          },
        };
      }
    } else if (id == "blue") {
      if (blueCount == 0) {
        return {
          initial: {
            x: "20%",
            y: "50%",
          },
          animate: {
            x: "20%",
            y: "55%",
          },
          transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 1,
            ease: "easeInOut",
            delay: 0.35,
          },
          exit: {
            x: "20%",
            y: "60%",
          },
        };
      } else if (blueCount == 1) {
        return {
          initial: {
            x: "20%",
            y: "60%",
          },
          animate: {
            x: "-50%",
            y: "-130%",
            scale: 0.75,
          },
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "20%",
            y: "60%",
            opacity: 0,
          },
        };
      } else if (blueCount == 2) {
        return {
          initial: {
            x: "-50%",
            y: "-130%",
          },
          animate: {
            x: "20%",
            y: "50%",
          },
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "20%",
            y: "60%",
          },
        };
      }
    }
  };

  return (
    <>
      <div id="languages" className="mt-[25%] flex justify-center items-center">
        <div className="flex  flex-wrap justify-center items-center w-full ">
          <div className="flex justify-center items-center w-[75vw] ">
            <motion.div
              key={yellowKey}
              id="yellow"
              initial={slideVars("yellow").initial}
              animate={slideVars("yellow").animate}
              transition={slideVars("yellow").transition}
              exit={slideVars("yellow").exit}
              className={` ${
                cardActive
                  ? !yellowCard
                    ? "opacity-0 duration-300  transition-opacity ease-in-out "
                    : "h-[30vmin] w-[40vmin] bg-yellow relative flex justify-center max-w-[600px]  max-h-[400px] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
                  : "h-[30vmin] w-[40vmin] bg-yellow relative flex justify-center max-w-[600px]  max-h-[400px] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
              }`}
              onClick={() => {
                setCardActive(!cardActive);
                setYellowCard(!yellowCard);
                setYellowCount((prevCount) => (prevCount + 1) % 3);
              }}
            >
              <div className="h-[30vmin] w-[40vmin] max-w-[600px]  max-h-[400px] bg-yellow relative flex justify-center rounded-2xl min-w-[125px] min-h-[85px]"></div>
              <div className="h-full w-full max-w-[600px]  max-h-[400px] bg-lightyellow absolute flex justify-center -z-20 right-[-5%] bottom-[-5%] rounded-2xl min-w-[125px] min-h-[85px]"></div>

              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  yellowCard
                    ? {
                        height: "50vw",
                        width: "40vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="bg-gray-100  absolute h-[50vw] w-[40vw] -z-30 top-[30%] max-h-[1100px] rounded-2xl "
              ></motion.div>
              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  yellowCard
                    ? {
                        height: "50vw",
                        width: "40vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className={
                  "bg-gray-300  absolute h-[50vw] w-[40vw] -z-40  max-h-[1100px] rounded-2xl top-[35%] ml-[10%] "
                }
              ></motion.div>
            </motion.div>

            <motion.div
              key={greenKey}
              id="green"
              initial={slideVars("green").initial}
              animate={slideVars("green").animate}
              transition={slideVars("green").transition}
              exit={slideVars("green").exit}
              className={` ${
                cardActive
                  ? !greenCard
                    ? "opacity-0 duration-300  transition-opacity ease-in-out"
                    : "h-[30vmin] w-[40vmin] bg-green relative flex justify-center max-w-[600px]  max-h-[400px] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
                  : "h-[30vmin] w-[40vmin] bg-green relative flex justify-center max-w-[600px]  max-h-[400px] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
              }`}
              onClick={() => {
                setCardActive(!cardActive);
                setGreenCard(!greenCard);

                setGreenCount((prevCount) => (prevCount + 1) % 3);
                console.log(greenCount);
              }}
            >
              <div className="h-[30vmin] w-[40vmin] max-w-[600px]  max-h-[400px] bg-green relative flex justify-center rounded-2xl min-w-[125px] min-h-[85px]"></div>
              <div className="h-full w-full max-w-[600px]  max-h-[400px] bg-lightgreen absolute flex justify-center -z-20 right-[-5%] bottom-[-5%] rounded-2xl min-w-[125px] min-h-[85px]"></div>

              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  greenCard
                    ? {
                        height: "40vw",
                        width: "35vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="bg-gray-100  absolute h-[45vw] w-[35vw] -z-30 top-[30%] max-h-[1100px] rounded-2xl overflow-x-hidden"
              ></motion.div>
              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  greenCard
                    ? {
                        height: "40vw",
                        width: "35vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className={
                  "bg-gray-300  absolute h-[45vw] w-[35vw] -z-40  max-h-[1100px] rounded-2xl top-[35%] ml-[10%] "
                }
              ></motion.div>
            </motion.div>
          </div>

          <div className="flex justify-center items-center w-[75vw] ">
            <motion.div
              key={redKey}
              id="red"
              initial={slideVars("red").initial}
              animate={slideVars("red").animate}
              transition={slideVars("red").transition}
              exit={slideVars("red").exit}
              className={` ${
                cardActive
                  ? !redCard
                    ? "opacity-0 duration-300  transition-opacity ease-in-out"
                    : "h-[30vmin] w-[40vmin] bg-red relative flex justify-center max-w-[600px]  max-h-[400px] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
                  : "h-[30vmin] w-[40vmin] bg-red relative flex justify-center max-w-[600px]  max-h-[400px] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
              }`}
              onClick={() => {
                setCardActive(!cardActive);
                setRedCard(!redCard);

                setRedCount((prevCount) => (prevCount + 1) % 3);
                console.log(redCount);
              }}
            >
              <div className="h-[30vmin] w-[40vmin] max-w-[600px]  max-h-[400px] bg-red relative flex justify-center rounded-2xl min-w-[125px] min-h-[85px]"></div>
              <div className="h-full w-full max-w-[600px]  max-h-[400px] bg-lightred absolute flex justify-center -z-20 right-[-5%] bottom-[-5%] rounded-2xl min-w-[125px] min-h-[85px]"></div>

              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  redCard
                    ? {
                        height: "40vw",
                        width: "35vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="bg-gray-100  absolute h-[50vw] w-[40vw] -z-30 top-[30%] max-h-[1100px] rounded-2xl"
              ></motion.div>
              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  redCard
                    ? {
                        height: "40vw",
                        width: "35vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className={
                  "bg-gray-300  absolute h-[50vw] w-[40vw] -z-40  max-h-[1100px] rounded-2xl top-[35%] ml-[10%] "
                }
              ></motion.div>
            </motion.div>

            <motion.div
              key={blueKey}
              id="blue"
              initial={slideVars("blue").initial}
              animate={slideVars("blue").animate}
              transition={slideVars("blue").transition}
              exit={slideVars("blue").exit}
              className={` ${
                cardActive
                  ? !blueCard
                    ? "opacity-0 duration-300  transition-opacity ease-in-out"
                    : "h-[30vmin] w-[40vmin] bg-blue relative flex justify-center max-w-[600px]  max-h-[400px] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
                  : "h-[30vmin] w-[40vmin] bg-blue relative flex justify-center max-w-[600px]  max-h-[400px] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
              }`}
              onClick={() => {
                setCardActive(!cardActive);
                setBlueCard(!blueCard);

                setBlueCount((prevCount) => (prevCount + 1) % 3);
                console.log(blueCount);
              }}
            >
              <div className="h-[30vmin] w-[40vmin] max-w-[600px]  max-h-[400px] bg-blue relative flex justify-center rounded-2xl min-w-[125px] min-h-[85px]"></div>
              <div className="h-full w-full max-w-[600px]  max-h-[400px] bg-lightblue absolute flex justify-center -z-20 right-[-5%] bottom-[-5%] rounded-2xl min-w-[125px] min-h-[85px]"></div>

              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  blueCard
                    ? {
                        height: "40vw",
                        width: "35vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="bg-gray-100  absolute h-[50vw] w-[40vw] -z-30 top-[30%] max-h-[1100px] rounded-2xl"
              ></motion.div>
              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  blueCard
                    ? {
                        height: "40vw",
                        width: "35vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className={
                  "bg-gray-300  absolute h-[50vw] w-[40vw] -z-40  max-h-[1100px] rounded-2xl top-[35%] ml-[10%] "
                }
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Languages;
