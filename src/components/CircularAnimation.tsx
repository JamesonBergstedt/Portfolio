import React, { useState, useEffect } from "react";
// import "./App.css"; // Import your Tailwind CSS styles

interface circleProps {
  startAngle: number;
  img: string;
}

const CircularAnimation: React.FC<circleProps> = ({ startAngle, img }) => {
  const [angle, setAngle] = useState(startAngle);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the angle to create the circular motion
      setAngle((prevAngle) => (prevAngle + 0.1) % 360);
    }, 25); // You can adjust the interval to control the speed of the animation

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  const position = {
    top: `${25 * Math.sin((angle * Math.PI) / 180)}vmin`,
    left: `${-8 + 25 * Math.cos((angle * Math.PI) / 180)}vmin`,
  };
  // console.log(`${Math.cos((angle * Math.PI) / 180)}%`);
  return (
    <div className="absolute " style={position}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="bg-cover rounded-full w-[15vmin] h-[15vmin] drop-shadow-[0_30px_5px_rgba(0,0,0,0.25)]"
      ></div>
    </div>
  );
};

export default CircularAnimation;
