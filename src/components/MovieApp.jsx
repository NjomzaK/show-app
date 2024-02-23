import MovieHeader from "./MovieHeader";
import MovieList from "./MovieList";
import { useEffect, useState } from "react";

let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c7373c11bf6d4bbbf14a7189e1266b9`;

export const MovieApp = () => {
  const [movies, setMovies] = useState([]);
  const [fetchUrl, setFetchUrl] = useState(url);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function fetchData() {
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.error(error));
    }
    fetchData();
  }, [fetchUrl]);

  const getMovies = (movieType) => {
    if (movieType === "Popular") {
      url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7c7373c11bf6d4bbbf14a7189e1266b9`;
    } else if (movieType === "Drama") {
      url = `https://api.themoviedb.org/3/discover/movie?with_genres=18&sort_by=popularity.desc&api_key=7c7373c11bf6d4bbbf14a7189e1266b9`;
    } else if (movieType === "Kids") {
      url = `https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=7c7373c11bf6d4bbbf14a7189e1266b9`;
    } else if (movieType === "Thriller") {
      url = `https://api.themoviedb.org/3/discover/movie?with_genres=53&sort_by=popularity.desc&api_key=7c7373c11bf6d4bbbf14a7189e1266b9`;
    }
    setFetchUrl(url);
  };
  const searchMovies = () => {
    url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=7c7373c11bf6d4bbbf14a7189e1266b9`;

    setFetchUrl(url);
    setSearch("");
  };

  return (
    <>
      <MovieHeader
        getMovies={getMovies}
        search={search}
        searchMovies={searchMovies}
        setSearch={setSearch}
      />
      <MovieList movies={movies} />
    </>
  );
};
