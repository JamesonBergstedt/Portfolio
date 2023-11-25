

const Resume = () => {
  return (
    <div className=" relative h-[50vh]">
      <div className="flex justify-center font-azeret font-semibold text-header_lg mt-[10%]">
        <div>Hire Me!</div>
      </div>

      <div className="w-full flex justify-center mt-[5%]">
        <span className="bg-green rounded-2xl p-[2%] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative top-[40%]">
          Download Resume
          <div className="bg-lightgreen w-full h-full p-[2%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
        </span>
      </div>
    </div>
  );
};

export default Resume;
