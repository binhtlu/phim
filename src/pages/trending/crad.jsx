import CircularProgressBar from "./circularProgressBar";
export default function Card({ title, releaseDate, posterUrl, point }) {
  return (
    <div className="rounded-xl border">
      <p className="absolute top-[1.5vw]">TV Show</p>
      {/* Poster + Score */}
      <img src={posterUrl} alt="Poster" className=" rounded-lg" />
      {/* Score+ Title + Date */}
      <div className="px-2 relative -top-[1.5vw]">
        <CircularProgressBar size={3} percent={Number(point.toFixed(1)) * 10} />
        <div className="mt-4">
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-gray-400 mt-1">{releaseDate}</p>
        </div>
      </div>
    </div>
  );
}
