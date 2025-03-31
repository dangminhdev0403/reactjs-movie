const TABS = [
  {
    id: "all",
    name: "All",
    url: "https://api.themoviedb.org/3/trending/all/day?language=en-US",
  },
  {
    id: "movie",
    name: "Movies",
    url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
  },
  {
    id: "tv",
    name: "TV Shows",
    url: "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
  },
];

const TOP_RATED_TABS = [
  {
    id: "movie",
    name: "Movies",
    url: "https://api.themoviedb.org/3/movie/top_rated",
  },
  {
    id: "tv",
    name: "TV Shows",
    url: "https://api.themoviedb.org/3/tv/top_rated",
  },
];

export { TABS, TOP_RATED_TABS };
