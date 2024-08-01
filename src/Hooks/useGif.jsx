// import { useState } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const useGif = () => {
  const API_KEY = "V8R0ZMvdOf21uJKBM0Y6M5sO7yILy9Ja";
  const [gif, setGif] = useState("car");
  const [loading, setloading] = useState(false);
  const getData = async () => {
    setloading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const response = await axios.get(url);
    const res_gif = response.data.data.images.downsized_large.url;
    setGif(res_gif);
    setloading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return { gif, loading, getData };
};
export default useGif;
