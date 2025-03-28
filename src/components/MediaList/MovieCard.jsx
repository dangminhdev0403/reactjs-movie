import React from "react";
import CicalorProgessBar from "./CicalorProgessBar";

const MovieCard = (props) => {
  const { media } = props;
  console.log("Check", media);

  return (
    <div className="rounded-lg border border-slate-800 relative">
      {media.media_type === "tv" && <p className="absolute top-0 left-0 bg-black">TV SHOWS</p>}
      <img
        className="rounded-lg"
        src={"https://image.tmdb.org/t/p/w500" + media.backdrop_path}
        alt=""
      />

      <div className="relative -top-[2rem] px-4 py-2">
        <CicalorProgessBar
          percent={Math.round(media.vote_average * 10)}
          strokeColor={media.vote_average > 5 ? "green" : "red"}
        />
        <p className="mt-2 font-bold">{media.title || media.name} </p>
        <p className="text-slate-400">
          {media.release_date || media.first_air_date}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
