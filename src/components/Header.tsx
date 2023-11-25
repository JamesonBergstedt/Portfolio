

const Header = () => {
  return (
    <>
      <div className="flex  justify-center items-center h-[100vh] w-[100vw] px-[3%]">
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
          <span className="bg-green rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-green_text whitespace-nowrap relative top-[30%]">
            Hi, my name is
            <div className="bg-lightgreen w-full h-full p-[10%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
          </span>
          <span className="bg-yellow rounded-2xl p-[5%] text-header_lg font-azeret font-semibold text-yellow_text whitespace-nowrap relative top-[40%] left-[15%]">
            Jameson Bergstedt
            <div className="bg-lightyellow w-full h-full p-[10%] rounded-2xl absolute top-[10%] -z-50 left-[5%]"></div>
          </span>
        </div>

        <div className="mb-[10%] ">
          <div className="bg-[url('/jameson_picture.jpg')] h-[35vmin] w-[35vmin]  rounded-full bg-cover relative ">
            <div className=" bg-reds rounded-full absolute bottom-[-5%] left-[2%] -z-50"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
