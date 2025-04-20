import { useEffect, useState } from "react";
import Card from "./crad";
import Finter from "./finter";
import axios from "axios";
import { API_KEY } from "../../lib/const";
import { SOURCE_IMAGE_URL_500 } from "../../lib/const";

export default function Trending() {
  const [dataMoviesTrending, setDataMoviesTrending] = useState([]);
  const [typeFilterTrending, setTypeFilterTrending] = useState("all");

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/trending/${typeFilterTrending}/week?language=en-US`;

    const fetchFeatureMovies = async () => {
      axios
        .get(url, {
          params: {
            api_key: API_KEY, // Đây là API Key v3
            language: "en-US",
            page: 1,
          },
        })
        .then((response) => {
          // console.log(response.data.results);
          setDataMoviesTrending(response.data.results);
        })
        .catch((error) => {
          console.error("Lỗi TMDB:", error.response?.data || error.message);
        });
    };

    fetchFeatureMovies();
  }, [typeFilterTrending]);

  return (
    <div className="px-8 py-10">
      {/* finter */}
      <Finter
        typeFilterTrending={typeFilterTrending}
        setTypeFilterTrending={setTypeFilterTrending}
      />
      {/* list */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 gap-4">
        {dataMoviesTrending &&
          dataMoviesTrending.map((movie) => {
            const titleMovie = movie.title || movie.name;
            const posterUrl = `${SOURCE_IMAGE_URL_500}${movie.backdrop_path}`;
            const releaseDate = movie.release_date || movie.first_air_date;
            return (
              <Card
                key={movie.id}
                point={movie.vote_average}
                posterUrl={posterUrl}
                title={titleMovie}
                releaseDate={releaseDate}
              />
            );
          })}
      </div>
    </div>
  );
}
