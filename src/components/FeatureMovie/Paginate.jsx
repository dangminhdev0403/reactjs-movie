import React, { useEffect } from "react";

const Paginate = (props) => {
  const { movies, active, setActive } = props;
  const getNextActiveId = (currentId) => {
    const currentIndex = movies.findIndex((movie) => movie.id === currentId);
    const nextIndex = (currentIndex + 1) % movies.length;
    return movies[nextIndex].id;
  };

  useEffect(() => {
    if (movies.length === 0) return;

    const updateActive = () => {
      setActive((prevActive) => getNextActiveId(prevActive));
    };

    const interval = setInterval(updateActive, 5000);
    return () => clearInterval(interval);
  }, [movies, setActive]);

  const handleActive = (id) => {
    setActive(id);
  };
  return (
    <div className="absolute right-8 bottom-[10%]">
      <ul className="flex gap-1">
        {movies.map((movie) => (
          <button
            className={`h-1 w-6 cursor-pointer ${movie.id === active ? "bg-slate-100" : "bg-black"}`}
            key={movie.id}
            onClick={() => handleActive(movie.id)}
          ></button>
        ))}
      </ul>
    </div>
  );
};

export default Paginate;
