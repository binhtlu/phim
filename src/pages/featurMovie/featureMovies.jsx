import React from "react";
export default function FeatureMovies() {
  return (
    <div className="relative w-screen">
      <img src="/bg/phim2.jpg" alt="" className="w-full h-[50rem] fint" />
      <div className="absolute  top-0 left-0 w-full h-full bg-black opacity-50 px-14 py-14">
        <div className="grid gap-4">
          <h1 className="text-2xl">Avenger end game</h1>
          <div className="grid gap-2">
            <p className="border p-1 !inline-block justify-center items-center">
              PG 13
            </p>
            <pt>2024-05-08</pt>
          </div>
        </div>
        <div>
          <h2>Overview</h2>
          <p>abc</p>
        </div>
        <div className=" flex gap-2">
          <button
            className={"bg-slate-200 text-slate-900 w-28 h-14 rounded-lg"}
          >
            Trailer
          </button>
          <button className={"w-28 h-14"}>thong tin</button>
        </div>
        <div className="border">
          <ul>
            <li className="w-4 h-0.5 bg-slate-600 cursor-pointer"></li>
            <li className="w-4 h-0.5 bg-slate-600 cursor-pointer"></li>
            <li className="w-4 h-0.5 bg-slate-600 cursor-pointer"></li>
            <li className="w-4 h-0.5 bg-slate-600 cursor-pointer"></li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}
