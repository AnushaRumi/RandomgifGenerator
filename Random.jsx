import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
const Random = () => {
  const [gif, setGif] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2 h-[450px] bg-green-500 rounded-lg border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random Gif</h1>
      {loading ? (<Spinner/>) : (<img src={gif} width="450" />)}
      <button onClick={clickHandler} className="w-10/12 bg-amber-100 text-lg py-2 rounded-lg">Generate</button>
    </div>
  );
};
 export default Random
