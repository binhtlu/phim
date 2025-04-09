// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center  w-screen px-10 bg-slate-900">
      <div className="flex items-center gap-10 text-slate-200">
        <img
          src="/icon/netflix.png"
          className=" w-10 sm:w-20 lg:w-28 "
          alt=""
        />
        <a href="#!"> Phim</a>
        <a href="#!">Truyền Hình</a>
      </div>
      <div>
        <FontAwesomeIcon
          className="text-white cursor-pointer "
          icon={faMagnifyingGlass}
        />
      </div>
    </div>
  );
};

export default Navbar;
