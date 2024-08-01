import React, { useState } from "react";
import axios from "axios";
const useTag = (tag) => {
  const API_KEY = "V8R0ZMvdOf21uJKBM0Y6M5sO7yILy9Ja";
  const [gif, setGif] = useState("car");
  const [loading, setLoading] = useState(false);

  const formHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const res = await axios.get(url);
    const gif_url = await res.data.data.images.downsized_large.url;
    setGif(gif_url);
    setLoading(false);
  };
  return { gif, formHandler, loading };
};

export default useTag;
