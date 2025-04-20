import { useEffect, useState } from "react";
import InforTop4Movies from "./inforTop4Movies";
import PaginateIndicator from "./paginateIndicator";
import axios from "axios";
import { API_KEY } from "../../lib/const";
// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export default function FeatureMovies() {
  const [dataFeatureMovies, setdataFeatureMovies] = useState([]);
  const [activeMovieId, setActiveMovieId] = useState();

  useEffect(() => {
    const fetchFeatureMovies = async () => {
      axios
        .get("https://api.themoviedb.org/3/movie/popular", {
          params: {
            api_key: API_KEY, // Đây là API Key v3
            language: "en-US",
            page: 1,
          },
        })
        .then((response) => {
          const top4Movies = response.data.results.slice(0, 4);
          setdataFeatureMovies(top4Movies);
          setActiveMovieId(top4Movies[0].id);
        })
        .catch((error) => {
          console.error("Lỗi TMDB:", error.response?.data || error.message);
        });
    };

    fetchFeatureMovies();
  }, []);

  return (
    <div className="relative">
      {dataFeatureMovies &&
        dataFeatureMovies
          .filter((value) => value.id === activeMovieId)
          .map((item) => {
            return <InforTop4Movies key={item.id} data={item} />;
          })}
      <PaginateIndicator
        activeMovieId={activeMovieId}
        movies={dataFeatureMovies}
        setActuveMovieId={setActiveMovieId}
      />
    </div>
  );
}
