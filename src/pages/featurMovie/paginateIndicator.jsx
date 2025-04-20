import { useEffect } from "react";
export default function PaginateIndicator({
  movies,
  activeMovieId,
  setActuveMovieId,
}) {
  useEffect(() => {
    if (!movies || movies.length === 0) return;

    const currentIndex = movies.findIndex(
      (movie) => movie.id === activeMovieId
    );

    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % movies.length;
      setActuveMovieId(movies[nextIndex].id);
    }, 5000); // 5 giây

    return () => clearInterval(interval); // Clear interval khi unmount
  }, [activeMovieId, movies, setActuveMovieId]);

  return (
    <div className=" absolute bottom-[10%] right-8">
      <ul className="flex gap-4">
        {movies?.map((movie) =>
          movie?.id ? (
            <li
              key={movie.id}
              className={`w-8 h-2 ${
                movie.id === activeMovieId ? "bg-slate-100" : "bg-slate-600"
              }  cursor-pointer`}
              onClick={() => {
                setActuveMovieId(movie.id);
              }}
            ></li>
          ) : null
        )}
      </ul>
    </div>
  );
}
