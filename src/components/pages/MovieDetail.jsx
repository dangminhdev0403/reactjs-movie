import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groupBy } from "lodash";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CicalorProgessBar from "../CicalorProgessBar";

const MovieDetail = () => {
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState([]);

  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWI5MzA1MzdkMGM1NWFlOWM3YjkyZDk4ZWEzOThhMyIsIm5iZiI6MTc0MzAxMTUxOC4xNjgsInN1YiI6IjY3ZTQzZWJlMGVlNTNkNGU3MWYwZDVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UwUpDINQsA4l1Qh0r8-a6zln0yfINS7-9I0iH2EvAkM";

    const url = `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`;
    if (url) {
      fetch(`${url}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        const data = await res.json();

        setMovieInfo(data);
      });
    }
  }, [id]);
  const certification =
    (
      (movieInfo.release_dates?.results || []).find(
        (result) => result.iso_3166_1 === "US",
      )?.release_dates || []
    ).find((release_date) => release_date.certification)?.certification || "";

  const crews = (movieInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  console.log("movieInfo", movieInfo);

  console.log("crews", crews);
  console.table(crews);

  const groupCrews = groupBy(crews, "job");
  console.log("groupCrews", groupCrews);

  return (
    <div className="relative overflow-hidden text-white">
      <img
        className="absolute inset-0 w-full brightness-[.2]"
        src={"https://image.tmdb.org/t/p/original" + movieInfo.poster_path}
        alt=""
      />
      <div className="relative mx-auto flex max-w-screen-xl gap-6 px-6 py-10 lg:gap-10">
        <div className="flex-1">
          <img
            className="h-full object-cover"
            src={
              "https://image.tmdb.org/t/p/original" + movieInfo.backdrop_path
            }
            alt=""
          />
        </div>
        <div className="flex-[2] text-[1.2vw]">
          <p className="mb-2 text-[2vw] font-bold">{movieInfo.title}</p>
          <div className="flex items-center gap-4">
            <span className="border border-gray-400 p-1 text-gray-400">
              {certification}
            </span>
            <p>{movieInfo.release_date}</p>
            <p>
              {(movieInfo.genres || []).map((genre) => genre.name).join(" p, ")}
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4">
            <div>
              <CicalorProgessBar
                percent={Math.round(movieInfo.vote_average * 10)}
                size={3.5}
                strokeWidth={0.3}
              />
              Rateting
            </div>
            <button className="">
              <FontAwesomeIcon icon={faPlay} className="mr-2" />
              Trailer
            </button>
          </div>

          <div className="mt-4">
            <p className="mb-2 text-[1.3vw] font-bold">Overview</p>
            <p>{movieInfo.overview}</p>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.entries(groupCrews).map(([job, crews]) => (
              <div key={job}>
                <p className="font-bold">{job}</p>

                {crews.map((crew) => (
                  <p key={crew.id} className="pt-1">{crew.name}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
