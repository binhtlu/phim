export default function Finter({ setTypeFilterTrending, typeFilterTrending }) {
  const arrFilter = [
    {
      id: 1,
      name: "All",
      value: "all",
    },
    {
      id: 2,
      name: "Movie",
      value: "movie",
    },
    {
      id: 3,
      name: "TV show",
      value: "tv",
    },
  ];
  return (
    <div className="flex gap-4 ">
      <p className=" text-2xl font-bold">Trending</p>
      <div className="border border-width-2 rounded-lg">
        <ul className="flex gap-4 ">
          {arrFilter.map((item) => {
            return (
              <li
                key={item.id}
                className={`px-4 py-2  cursor-pointer ${
                  typeFilterTrending === item.value
                    ? "bg-slate-200 text-black rounded-lg"
                    : ""
                } `}
                onClick={() => {
                  setTypeFilterTrending(item.value);
                }}
              >
                {item.name}
              </li>
            );
          })}
          {/* <li className=" px-4 py-2  cursor-pointer  rounded-lg">
            All
          </li>
          <li className="px-4 py-2  cursor-pointer ">Movie</li>
          <li className="px-4 py-2  cursor-pointer ">TV show</li> */}
        </ul>
      </div>
    </div>
  );
}
