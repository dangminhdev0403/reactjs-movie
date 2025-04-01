import { Link } from "react-router-dom";
import CicalorProgessBar from "./CicalorProgessBar";

const MovieCard = (props) => {
  const { media, mediaType } = props;

  return (
    <Link to={`/movie/${media.id}`}>
      <div className="relative flex h-full flex-col overflow-hidden rounded-lg border border-slate-800">
        {mediaType === "tv" && (
          <p className="absolute top-0 left-0 bg-black">TV SHOWS</p>
        )}
        <img
          className="rounded-lg object-cover"
          src={"https://image.tmdb.org/t/p/w500" + media.poster_path}
          alt=""
        />

        <div className="relative -top-[1.5vw] px-4">
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
    </Link>
  );
};

export default MovieCard;
