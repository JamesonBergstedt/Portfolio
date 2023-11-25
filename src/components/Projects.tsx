

const Projects = () => {
  return (
    <div>
      <div className="flex justify-center font-azeret font-semibold text-header_lg my-[10%]">
        <div>Projects</div>
      </div>

      <div className="flex justify-center gap-[10%] ">
        <span className="bg-red rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-red_text whitespace-nowrap relative top-[40%]">
          Simple Scratch
          <div className="bg-lightred w-full h-full p-[5%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
        </span>

        <span className="bg-red rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-red_text whitespace-nowrap relative top-[40%]">
          Stego File
          <div className="bg-lightred w-full h-full p-[5%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
        </span>
      </div>
    </div>
  );
};

export default Projects;
