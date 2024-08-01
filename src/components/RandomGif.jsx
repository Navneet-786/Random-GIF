import useGif from "../Hooks/useGif";

const RandomGif = () => {
  const { gif, loading, getData } = useGif();

  return (
    <div className="lg:w-1/3 md:w-[70%] w-[95%] max-h-max h-1/4   relative rounded-md flex flex-col items-center gap-2 py-2">
      <div className="w-full h-full   bg-red-500 opacity-50 absolute"></div>
      <h1 className="text-center text-2xl z-[1] opacity-100 font-medium mt-2 text-white relative ">
        A Random Gif
      </h1>

      {loading ? (
        <span className="loader"></span>
      ) : (
        <img src={gif} alt="gif" width={300} className="z-[100]" />
      )}

      <button
        className="w-[95%] bg-white relative rounded-md py-1 text-md "
        onClick={() => getData()}
      >
        Generate
      </button>
    </div>
  );
};

export default RandomGif;
