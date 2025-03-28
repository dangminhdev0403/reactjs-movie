import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const MediaList = () => {
  const [mediaList, setMediaList] = useState([]);
  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWI5MzA1MzdkMGM1NWFlOWM3YjkyZDk4ZWEzOThhMyIsIm5iZiI6MTc0MzAxMTUxOC4xNjgsInN1YiI6IjY3ZTQzZWJlMGVlNTNkNGU3MWYwZDVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UwUpDINQsA4l1Qh0r8-a6zln0yfINS7-9I0iH2EvAkM";
    fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then(async (res) => {
      const data = await res.json();
      const trendingMedia = data.results.slice(0, 12);
      setMediaList(trendingMedia);
    });
  }, []);
  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">Trending</p>
        <ul className="flex gap-4 rounded border-white">
          <li className="cursor-pointer rounded bg-white px-2 py-1 text-black">
            ALL
          </li>
          <li className="cursor-pointer rounded px-2 py-1">Movie</li>
          <li className="cursor-pointer rounded px-2 py-1">TV Show</li>
        </ul>
      </div>

      <div className="sm:cols-4 grid grid-cols-2 gap-4 lg:grid-cols-6">
        {mediaList.map((media) => (
          <MovieCard key={media.id} media={media} />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
