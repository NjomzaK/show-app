import ShowHeader from "./ShowHeader";
import ShowList from "./ShowList";
import { useEffect, useState } from "react";

let url = `
https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=7c7373c11bf6d4bbbf14a7189e1266b9`;

export const ShowApp = () => {
  const [shows, setShows] = useState([]);
  const [fetchUrl, setFetchUrl] = useState(url);
  const [search, setSearch] = useState("");

  useEffect(() => {
    function fetchData() {
      fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => setShows(data.results))
        .catch((error) => console.error(error));
    }
    fetchData();
  }, [fetchUrl]);

  const getShows = (showType) => {
    if (showType === "Popular") {
      url = `
https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=7c7373c11bf6d4bbbf14a7189e1266b9`;
    } else if (showType === "Animation") {
      url = `
https://api.themoviedb.org/3/discover/tv?with_genres=16&sort_by=popularity.desc&api_key=7c7373c11bf6d4bbbf14a7189e1266b9`;
    } else if (showType === "Kids") {
      url = `
https://api.themoviedb.org/3/discover/tv?with_genres=10762&sort_by=popularity.desc&api_key=7c7373c11bf6d4bbbf14a7189e1266b9`;
    } else if (showType === "Sci-Fi & Fantasy") {
      url = `
https://api.themoviedb.org/3/discover/tv?with_genres=10765&sort_by=popularity.desc&api_key=7c7373c11bf6d4bbbf14a7189e1266b9`;
    }
    setFetchUrl(url);
  };
  const searchShows = () => {
    url = `
https://api.themoviedb.org/3/search/tv?query=${search}&api_key=7c7373c11bf6d4bbbf14a7189e1266b9`;

    setFetchUrl(url);
    setSearch("");
  };

  return (
    <>
      <ShowHeader
        getShows={getShows}
        search={search}
        searchShows={searchShows}
        setSearch={setSearch}
      />
      <ShowList shows={shows} />
    </>
  );
};
