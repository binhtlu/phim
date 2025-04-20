import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { sourceImageUrlOriginal } from "../../lib/const";
export default function InforTop4Movies(props) {
  const {
    data: { backdrop_path, title, release_date, overview },
  } = props;
  return (
    <div>
      <img
        src={`${sourceImageUrlOriginal}${backdrop_path}`}
        alt=""
        className=" brightness-50 h-[40rem] w-full"
      />
      <div className="absolute bottom-[40%] left-8 w-1/3">
        <div className="grid gap-4">
          <h1 className="text-2xl font-bold">{title}</h1>
          <div className="grid gap-2">
            {/* <p className="border p-1 !inline-block justify-center items-center">
              PG 13
            </p> */}
            <p>{release_date}</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p className="mt-8">{overview}</p>
        </div>
        <div className="mt-8 flex gap-4">
          <button
            className={
              "bg-slate-200 text-slate-900 w-28 h-14 rounded-lg cursor-pointer flex gap-2 justify-center items-center"
            }
          >
            <FontAwesomeIcon icon={faPlay} />
            <span>Trailer</span>
          </button>
          <button
            className={
              "w-28 h-14 cursor-pointer  rounded-lg brightness-50 opacity-75 bg-slate-300 text-black"
            }
          >
            Infor
          </button>
        </div>
      </div>
    </div>
  );
}
