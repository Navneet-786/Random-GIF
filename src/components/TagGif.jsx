import React, { useState } from "react";

import useTag from "../Hooks/useTag";
const TagGif = () => {
  const [formData, setFormData] = useState({ tagName: "car" });
  const { gif, formHandler, loading } = useTag(formData.tagName);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="lg:w-1/3 md:w-[70%] w-[95%]  bg-slate-700 opacity-70 flex flex-col items-center gap-2 py-4">
      <h1 className="w-[90%] text-center text-2xl capitalize text-white ">
        Tag Gif
      </h1>
      {loading ? (
        <span className="loader z-[20]"></span>
      ) : (
        <img src={gif} alt="" width={300} className="z-[2100] " />
      )}
      <form
        onSubmit={formHandler}
        className="flex flex-col w-full items-center mt-1 gap-2"
      >
        <input
          type="text"
          placeholder="Tag Name"
          name="tagName"
          value={formData.tagName}
          onChange={changeHandler}
          className="w-[90%] text-center py-1 rounded-md z-[200] focus:outline-none"
        />
        <button
          type="submit"
          className="w-[90%] text-center py-1 rounded-md bg-slate-100 z-[200]"
        >
          search
        </button>
      </form>
    </div>
  );
};

export default TagGif;
