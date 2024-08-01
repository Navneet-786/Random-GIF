import React from "react";
import Bg from "./assets/bg.jpg";
import RandomGif from "./components/RandomGif";
import TagGif from "./components/TagGif";
const App = () => {
  return (
    <div className="w-full h-screen">
      <img src={Bg} alt="" className="absolute w-full h-full " />
      <div className="relative flex items-center flex-col  gap-8">
        <h1 className="w-[90%] bg-cyan-500 shadow-lg shadow-cyan-500/50  text-center text-3xl mt-5 rounded-md text-white py-1 font-bold">
          Random Gif
        </h1>

        <div className="w-full flex flex-col justify-center lg:flex-row items-center gap-10">
          <RandomGif />
          <TagGif />
        </div>
      </div>
    </div>
  );
};

export default App;
