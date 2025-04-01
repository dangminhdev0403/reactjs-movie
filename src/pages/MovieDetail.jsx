import LoadingAnimation from "@/components/LoadingAnimation";
import ActorList from "@/components/MediaDetail/ActorList";
import Banner from "@/components/MediaDetail/Banner";
import RelativeMediaList from "@/components/MediaDetail/RelativeMediaList";
import useFetch from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();

  const [isRelatedMovieLoading, setIsRelatedMovieLoading] = useState(false);

  const [relatedMovies, setRelatedMovies] = useState([]);

  const { data: movieInfo, isLoading } = useFetch({
    url: `/movie/${id}?append_to_response=release_dates,credits`,
  });

  useEffect(() => {
    setIsRelatedMovieLoading(true);
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWI5MzA1MzdkMGM1NWFlOWM3YjkyZDk4ZWEzOThhMyIsIm5iZiI6MTc0MzAxMTUxOC4xNjgsInN1YiI6IjY3ZTQzZWJlMGVlNTNkNGU3MWYwZDVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UwUpDINQsA4l1Qh0r8-a6zln0yfINS7-9I0iH2EvAkM";

    const url = ` https://api.themoviedb.org/3/movie/${id}/recommendations`;
    if (url) {
      fetch(`${url}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then(async (res) => {
          const data = await res.json();
          const currentRalatedMovies = (data.results || []).slice(0, 12);
          setRelatedMovies(currentRalatedMovies);
        })
        .catch((error) => console.log(error))
        .finally(() => setIsRelatedMovieLoading(false));
    }
  }, [id]);

  if (isLoading)
    return (
      <div>
        <LoadingAnimation />
      </div>
    );
  return (
    <div>
      <Banner mediaInfo={movieInfo} />

      <div className="bg-black text-[1.2vw] text-white">
        <div className="mx-auto flex max-w-screen-xl gap-6 px-6 py-10">
          <div className="flex-[2]">
            <ActorList actors={movieInfo.credits?.cast || []} />
            <RelativeMediaList mediaList={relatedMovies} />
          </div>
          <div className="flex-[1]">
            <p className="mb-4 text-[1.4vw] font-bold">Infomation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
