import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navbar = ({ searchMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="w-full flex justify-between items-center p-6 bg-black">
      <h2 className="uppercase text-red-600 font-poppins font-semibold text-3xl">
        movieflix
      </h2>

      <div className="flex items-center gap-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className=" px-4 py-2 rounded-full text-xs text-white outline-none bg-transparent border border-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button
            onClick={() => searchMovies(searchTerm)}
            className="absolute top-[10px] right-5 cursor-pointer flex justify-center items-center"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div>
          <a
            href="#"
            className="uppercase bg-red-700 px-5 py-2 rounded-full font-light text-xs mr-1"
          >
            Join Now
          </a>

          <a
            href="#"
            className="uppercase border border-white px-5 py-2 rounded-full font-light text-xs"
          >
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
