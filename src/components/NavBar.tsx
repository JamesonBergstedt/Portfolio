import React from "react";
import { motion, useScroll } from "framer-motion";
import { useState } from "react";

const NavBar = () => {
  const { scrollY } = useScroll();

  const [hidden, setHidden] = useState(false);

  function update() {
    if (scrollY.get() < scrollY.getPrevious()) {
      setHidden(false);
      console.log("visible");
    } else if (scrollY.get() > 100 && scrollY.get() > scrollY.getPrevious()) {
      setHidden(true);
      console.log("hidden");
    }
  }

  const variants = {
    /** this is the "visible" key and it's respective style object **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's respective style object **/
    hidden: { opacity: 0, y: -25 },
  };

  /** update the onChange callback to call for `update()` **/
  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  return (
    <div className="   sticky top-0 z-50">
      <motion.nav
        className="flex justify-between items-center bg-[#FFFFFF] px-[5%]"
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      >
        <ul className="flex items-center gap-[10%] h-[75px] font-azeret select-none text-nav whitespace-nowrap">
          <li className="hover:text-green cursor-pointer">About Me</li>
          <li className="hover:text-yellow cursor-pointer">Languages</li>
          <li className="hover:text-blue cursor-pointer">Projects</li>
          <li className="hover:text-red cursor-pointer">Resume</li>
        </ul>
        <div className=" font-azeret text-header_lg  font-semibold select-none">
          <span className="text-blue">Jberg</span>
          <span>.io</span>
        </div>
      </motion.nav>
    </div>
  );
};

export default NavBar;
