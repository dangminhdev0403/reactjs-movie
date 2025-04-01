import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groupBy } from "lodash";
import React from "react";
import CicalorProgessBar from "../CicalorProgessBar";

const Banner = (props) => {
  const { mediaInfo } = props;

  const certification =
    (
      (mediaInfo.release_dates?.results || []).find(
        (result) => result.iso_3166_1 === "US",
      )?.release_dates || []
    ).find((release_date) => release_date.certification)?.certification || "";

  const crews = (mediaInfo.credits?.crew || [])
    .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
    .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

  const groupCrews = groupBy(crews, "job");
  return (
    <div className="relative overflow-hidden text-white shadow-md-bg-slate-800">
      {/* Hình nền mờ với lớp phủ tối */}
      <div className="absolute inset-0 bg-black/50">
        <img
          className="h-full w-full object-cover brightness-[0.2]"
          src={"https://image.tmdb.org/t/p/original" + mediaInfo.backdrop_path}
          alt=""
        />
      </div>

      <div className="relative mx-auto flex max-w-screen-xl gap-10 px-6 py-10">
        {/* Hình chính */}
        <div className="flex-1">
          <img
            src={"https://image.tmdb.org/t/p/original" + mediaInfo.poster_path}
            alt=""
          />
        </div>

        {/* Nội dung */}
        <div className="flex-[2]">
          {/* Tiêu đề */}
          <h1 className="text-4xl font-bold">{mediaInfo.title}</h1>

          {/* Thông tin phụ */}
          <div className="my-4 flex items-center gap-4">
            <span className="border border-gray-400 px-2 py-1 text-sm text-gray-400">
              {certification}
            </span>
            <p className="text-base">{mediaInfo.release_date}</p>
            <p className="text-base">
              {(mediaInfo.genres || []).map((genre) => genre.name).join(", ")}
            </p>
          </div>

          {/* Đánh giá và Trailer */}
          <div className="my-4 flex items-center gap-6">
            <div className="flex flex-col items-center">
              <CicalorProgessBar
                percent={Math.round(mediaInfo.vote_average * 10)}
                size={3.5}
                strokeWidth={0.3}
              />
              <span className="mt-1 text-sm">Rating</span>
            </div>
            <button className="flex items-center gap-2 text-white hover:text-gray-300">
              <FontAwesomeIcon icon={faPlay} />
              <span>Trailer</span>
            </button>
          </div>

          {/* Tổng quan */}
          <div className="my-4">
            <h2 className="text-xl font-bold">Tổng quan</h2>
            <p className="mt-2 text-base">{mediaInfo.overview}</p>
          </div>

          {/* Đội ngũ sản xuất */}
          <div className="my-4 grid grid-cols-2 gap-4">
            {Object.entries(groupCrews).map(([job, crews]) => (
              <div key={job}>
                <p className="text-xl font-bold">{job}</p>
                {crews.map((crew) => (
                  <p key={crew.id} className="mt-1 text-base">
                    {crew.name}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
