// import Spinner from "./Spinner";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// import Card from "./Card";

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

  const [cardView, setCardView] = useState("");

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
            repeatType: "mirror" as any,
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
            repeat: undefined,
            repeatType: undefined,
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "-20%",
            y: "10%",
            opacity: 0,
          },
        };
      } else {
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
            repeat: undefined,
            repeatType: undefined,
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
            repeatType: "mirror" as any,
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
            repeat: undefined,
            repeatType: undefined,
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "20%",
            y: "10%",
            opacity: 0,
          },
        };
      } else {
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
            repeat: undefined,
            repeatType: undefined,
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
            repeatType: "mirror" as any,
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
            repeat: undefined,
            repeatType: undefined,
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "-20%",
            y: "60%",
            opacity: 0,
          },
        };
      } else {
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
            repeat: undefined,
            repeatType: undefined,
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
            repeat: undefined,
            repeatType: undefined,
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "20%",
            y: "60%",
            opacity: 0,
          },
        };
      } else {
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
            repeat: undefined,
            repeatType: undefined,
            duration: 1,
            ease: "easeInOut",
          },
          exit: {
            x: "20%",
            y: "60%",
          },
        };
      }
    } else {
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
          repeatType: "mirror" as any,
          duration: 1,
          ease: "easeInOut",
          delay: 0.55,
        },
        exit: {
          x: "20%",
          y: "10%",
        },
      };
    }
  };

  return (
    <>
      <div
        id="languages"
        className=" flex justify-center items-center min-h-[110vh] pb-[10%]"
      >
        <div className="flex  flex-wrap justify-center items-center w-full ">
          <div className="flex justify-center items-center w-[75vw] max-h-[1200px]">
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
                    ? "opacity-0 duration-300 transition-opacity ease-in-out"
                    : "h-[25vmin] w-[35vmin] bg-yellow relative flex justify-center max-w-[50vw] max-h-[50vh] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
                  : "h-[25vmin] w-[35vmin] bg-yellow relative flex justify-center max-w-[50vw] max-h-[50vh] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
              }`}
              onClick={() => {
                setCardActive(!cardActive);
                setYellowCard(!yellowCard);
                setYellowCount((prevCount) => (prevCount + 1) % 3);
              }}
            >
              <div className="h-[25vmin] w-[35vmin] max-w-[50vw] max-h-[50vh] bg-yellow relative flex justify-center rounded-2xl min-w-[125px] min-h-[85px] items-center text-yellow_text font-azeret text-header_lg font-semibold">
                <span>Languages</span>
              </div>
              <div className="h-full w-full max-w-[50vw] max-h-[50vh] bg-lightyellow absolute flex justify-center -z-20 right-[-5%] bottom-[-5%] rounded-2xl min-w-[125px] min-h-[85px]"></div>

              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  yellowCard
                    ? {
                        height: "60vw",
                        width: "55vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="bg-gray-100 absolute h-[50vmax] w-[40vmax] -z-30 top-[30%] max-h-[100vh] max-w-[1100px] rounded-2xl "
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between pt-[5%] px-[5%] ">
                  <div>
                    {cardView != "" && (
                      <img
                        className="h-[4vmin] w-[4vmin] cursor-pointer hover:scale-110 ease-in-out duration-200"
                        src="/arrow-left.svg"
                        onClick={() => {
                          setCardView("");
                        }}
                      />
                    )}
                  </div>

                  <img
                    className="h-[4vmin] w-[4vmin] cursor-pointer hover:scale-110 ease-in-out duration-200"
                    src="/x.svg"
                    onClick={() => {
                      setCardActive(!cardActive);
                      setYellowCard(!yellowCard);
                      setYellowCount((prevCount) => (prevCount + 1) % 3);
                    }}
                  />
                </div>

                {cardView == "" && (
                  <motion.div
                    animate={
                      yellowCard
                        ? {
                            opacity: 1,
                          }
                        : { opacity: 0 }
                    }
                    transition={
                      yellowCard
                        ? { delay: 1, duration: 1.5, ease: "easeIn" }
                        : { duration: 1, ease: "easeIn" }
                    }
                    className="w-full h-full flex flex-col items-center justify-center"
                  >
                    <p
                      className="text-header_lg font-azeret mb-[5%] hover:bg-lightyellow hover:text-yellow_text hover:font-medium px-[5%] rounded-2xl cursor-pointer"
                      onClick={() => setCardView("python")}
                    >
                      Python
                    </p>
                    <p className="text-header_lg font-azeret my-[5%] hover:bg-lightyellow hover:text-yellow_text hover:font-medium px-[5%] rounded-2xl cursor-pointer">
                      Java
                    </p>
                    <p className="text-header_lg font-azeret my-[5%] hover:bg-lightyellow hover:text-yellow_text hover:font-medium px-[5%] rounded-2xl cursor-pointer">
                      Golang
                    </p>
                  </motion.div>
                )}

                {cardView == "python" && (
                  <motion.div
                    animate={
                      yellowCard
                        ? {
                            opacity: 1,
                          }
                        : { opacity: 0 }
                    }
                    transition={
                      yellowCard
                        ? { delay: 2, duration: 1.5, ease: "easeIn" }
                        : { duration: 1, ease: "easeIn" }
                    }
                    className="w-full h-full flex flex-col items-center "
                  >
                    {yellowCard && (
                      <p className="text-header_sm font-azeret    pt-[35%] p-[15%] rounded-2xl text-center">
                        I have over 8 years of experience working with Python.
                        The backend for my personal project, Simple Scratch is
                        built using Python. Additionally, I have expereince with
                        webscraping (beautifulsoup), data analysis (numpy,
                        pandas), web services (flask), NLP (nltk), and much
                        more. Python is my preferred language. I enjoy the
                        simplicity of it as well as its flexability.
                      </p>
                    )}
                  </motion.div>
                )}
              </motion.div>
              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  yellowCard
                    ? {
                        height: "60vw",
                        width: "55vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className={
                  "bg-lightyellow absolute h-[50vmax] w-[40vmax] -z-40 max-h-[100vh] max-w-[1100px] rounded-2xl top-[35%] ml-[10%] "
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
                    ? "opacity-0 duration-300 transition-opacity ease-in-out"
                    : "h-[25vmin] w-[35vmin] bg-green relative flex justify-center max-w-[50vw] max-h-[50vh] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
                  : "h-[25vmin] w-[35vmin] bg-green relative flex justify-center max-w-[50vw] max-h-[50vh] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
              }`}
              onClick={() => {
                setCardActive(!cardActive);
                setGreenCard(!greenCard);
                setGreenCount((prevCount) => (prevCount + 1) % 3);
              }}
            >
              <div className="h-[25vmin] w-[35vmin] max-w-[50vw] max-h-[50vh] bg-green relative flex justify-center rounded-2xl min-w-[125px] min-h-[85px] items-center text-green_text font-azeret text-header_lg font-semibold">
                <span>Front-End</span>
              </div>
              <div className="h-full w-full max-w-[50vw] max-h-[50vh] bg-lightgreen absolute flex justify-center -z-20 right-[-5%] bottom-[-5%] rounded-2xl min-w-[125px] min-h-[85px]"></div>

              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  greenCard
                    ? {
                        height: "60vw",
                        width: "55vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="bg-gray-100 absolute h-[50vmax] w-[40vmax] -z-30 top-[30%] max-h-[100vh] max-w-[1100px] rounded-2xl "
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end pt-[5%] pr-[5%] ">
                  <img
                    className="h-[4vmin] w-[4vmin] cursor-pointer hover:scale-110 ease-in-out duration-200"
                    src="/x.svg"
                    onClick={() => {
                      setCardActive(!cardActive);
                      setGreenCard(!greenCard);
                      setGreenCount((prevCount) => (prevCount + 1) % 3);
                    }}
                  />
                </div>

                <motion.div
                  animate={
                    greenCard
                      ? {
                          opacity: 1,
                        }
                      : { opacity: 0 }
                  }
                  transition={
                    greenCard
                      ? { delay: 2, duration: 1.5, ease: "easeIn" }
                      : { duration: 1, ease: "easeIn" }
                  }
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <p className="text-header_lg font-azeret my-[5%] hover:bg-lightyellow hover:text-yellow_text hover:font-medium px-[5%] rounded-2xl cursor-pointer">
                    Python
                  </p>
                  <p className="text-header_lg font-azeret my-[5%] hover:bg-lightyellow hover:text-yellow_text hover:font-medium px-[5%] rounded-2xl cursor-pointer">
                    Java
                  </p>
                  <p className="text-header_lg font-azeret my-[5%] hover:bg-lightyellow hover:text-yellow_text hover:font-medium px-[5%] rounded-2xl cursor-pointer">
                    Golang
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  greenCard
                    ? {
                        height: "60vw",
                        width: "55vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className={
                  "bg-gray-300 absolute h-[50vmax] w-[40vmax] -z-40 max-h-[100vh] max-w-[1100px] rounded-2xl top-[35%] ml-[10%] "
                }
              ></motion.div>
            </motion.div>
          </div>

          <div className="flex justify-center items-center w-[75vw] max-h-[1200px] ">
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
                    ? "opacity-0 duration-300 transition-opacity ease-in-out"
                    : "h-[25vmin] w-[35vmin] bg-red relative flex justify-center max-w-[50vw] max-h-[50vh] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
                  : "h-[25vmin] w-[35vmin] bg-red relative flex justify-center max-w-[50vw] max-h-[50vh] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
              }`}
              onClick={() => {
                setCardActive(!cardActive);
                setRedCard(!redCard);
                setRedCount((prevCount) => (prevCount + 1) % 3);
              }}
            >
              <div className="h-[25vmin] w-[35vmin] max-w-[50vw] max-h-[50vh] bg-red relative flex justify-center rounded-2xl min-w-[125px] min-h-[85px] items-center text-red_text font-azeret text-header_lg font-semibold">
                <span>Dev-Ops</span>
              </div>
              <div className="h-full w-full max-w-[50vw] max-h-[50vh] bg-lightred absolute flex justify-center -z-20 right-[-5%] bottom-[-5%] rounded-2xl min-w-[125px] min-h-[85px]"></div>

              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  redCard
                    ? {
                        height: "60vw",
                        width: "55vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="bg-gray-100 absolute h-[50vmax] w-[40vmax] -z-30 top-[30%] max-h-[100vh] max-w-[1100px] rounded-2xl "
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end pt-[5%] pr-[5%] ">
                  <img
                    className="h-[4vmin] w-[4vmin] cursor-pointer hover:scale-110 ease-in-out duration-200"
                    src="/x.svg"
                    onClick={() => {
                      setCardActive(!cardActive);
                      setRedCard(!redCard);
                      setRedCount((prevCount) => (prevCount + 1) % 3);
                    }}
                  />
                </div>

                <motion.div
                  animate={
                    redCard
                      ? {
                          opacity: 1,
                        }
                      : { opacity: 0 }
                  }
                  transition={
                    redCard
                      ? { delay: 2, duration: 1.5, ease: "easeIn" }
                      : { duration: 1, ease: "easeIn" }
                  }
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  <p className="text-header_lg font-azeret my-[5%] hover:bg-lightyellow hover:text-yellow_text hover:font-medium px-[5%] rounded-2xl cursor-pointer">
                    Python
                  </p>
                  <p className="text-header_lg font-azeret my-[5%] hover:bg-lightyellow hover:text-yellow_text hover:font-medium px-[5%] rounded-2xl cursor-pointer">
                    Java
                  </p>
                  <p className="text-header_lg font-azeret my-[5%] hover:bg-lightyellow hover:text-yellow_text hover:font-medium px-[5%] rounded-2xl cursor-pointer">
                    Golang
                  </p>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  redCard
                    ? {
                        height: "60vw",
                        width: "55vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className={
                  "bg-gray-300 absolute h-[50vmax] w-[40vmax] -z-40 max-h-[100vh] max-w-[1100px] rounded-2xl top-[35%] ml-[10%] "
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
                    ? "opacity-0 duration-300 transition-opacity ease-in-out"
                    : "h-[25vmin] w-[35vmin] bg-blue relative flex justify-center max-w-[50vw] max-h-[50vh] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
                  : "h-[25vmin] w-[35vmin] bg-blue relative flex justify-center max-w-[50vw] max-h-[50vh] rounded-2xl opacity-100 duration-300 transition-opacity ease-in-out z-50 delay-[1500ms] min-w-[125px] min-h-[85px]"
              }`}
              onClick={() => {
                setCardActive(!cardActive);
                setBlueCard(!blueCard);
                setBlueCount((prevCount) => (prevCount + 1) % 3);
              }}
            >
              <div className="h-[25vmin] w-[35vmin] max-w-[50vw] max-h-[50vh] bg-blue relative flex justify-center rounded-2xl min-w-[125px] min-h-[85px] items-center text-blue_text font-azeret text-header_lg font-semibold">
                <span>About Me</span>
              </div>
              <div className="h-full w-full max-w-[50vw] max-h-[50vh] bg-lightblue absolute flex justify-center -z-20 right-[-5%] bottom-[-5%] rounded-2xl min-w-[125px] min-h-[85px]"></div>

              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  blueCard
                    ? {
                        height: "60vw",
                        width: "55vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="bg-gray-100 absolute h-[50vmax] w-[40vmax] -z-30 top-[30%] max-h-[100vh] max-w-[1100px] rounded-2xl "
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-end pt-[5%] pr-[5%] ">
                  <img
                    className="h-[4vmin] w-[4vmin] cursor-pointer hover:scale-110 ease-in-out duration-200"
                    src="/x.svg"
                    onClick={() => {
                      setCardActive(!cardActive);
                      setBlueCard(!blueCard);
                      setBlueCount((prevCount) => (prevCount + 1) % 3);
                    }}
                  />
                </div>

                <motion.div
                  animate={
                    blueCard
                      ? {
                          opacity: 1,
                        }
                      : { opacity: 0 }
                  }
                  transition={
                    blueCard
                      ? { delay: 1, duration: 1.5, ease: "easeIn" }
                      : { duration: 0.5, ease: "easeIn" }
                  }
                  className="w-full h-full flex flex-col items-center justify-center"
                >
                  {blueCard && (
                    <div className="flex flex-col items-center justify-center">
                      <p className="text-header_sm font-azeret    pt-[5%] p-[15%] rounded-2xl text-center">
                        Hello! Welcome to my website. As you have probably seen,
                        my name is Jameson Bergstedt. I am currently employed at
                        Cisco as a software engineer. There, I work primarily
                        with technologies such as golang, python, docker,
                        kubernetes, and jenkins.I am married to my beautiful
                        wife, Kayla, and we are expecting our first child in
                        October, 2024! We love the outdoors (especially the
                        mountains) and I am a BIG motorcycle enthusiast.When I
                        am not hanging out with my wife, I spend most of my free
                        time playing competitive video games, pool, and
                        poker...and of course, working on personal projects. If
                        you’d like to chat, send me an invitation on linkedIn!
                      </p>
                      <div className="flex justify-center mb-[5%]">
                        <a
                          href="https://www.linkedin.com/in/jameson-bergstedt-88804b181/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            className="h-[8vw] w-[8vw] "
                            src="./linkedin-icon.svg"
                          />
                        </a>
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ height: "0vw", width: "0vw" }}
                animate={
                  blueCard
                    ? {
                        height: "60vw",
                        width: "55vw",
                        minHeight: "350px",
                        minWidth: "300px",
                      }
                    : { height: "0vw", width: "0vw" }
                }
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className={
                  "bg-lightblue absolute h-[50vmax] w-[35vmax] -z-40 max-h-[100vh]  max-w-[1100px] rounded-2xl top-[35%] ml-[10%] "
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
