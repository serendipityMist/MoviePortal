import React, { useState } from "react";
import { fetchMovies } from "../api/FetchMovies";
import Card from "./Card";

const MoviePortal = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const [message, setMessage] = useState([]);
  const [errMessage, setErrMessage] = useState(null);

  const onSearchTextEnter = (e) => {
    e.preventDefault();
    fetchMovies(searchMovie, setMessage, setErrMessage, () => {});
    setSearchMovie("");
    // inputRef.current.value = "";
  };

  return (
    <>
      <form
        onSubmit={onSearchTextEnter}
        className="  w-1/2 flex justify-center m-auto h-full"
      >
        <input
          type="text"
          placeholder="Search Movie"
          value={searchMovie}
          onChange={(e) => {
            setSearchMovie(e.target.value);
          }}
          className="border border-black w-full m-auto  rounded-md text-center bold text-xl"
        />
      </form>
      {errMessage && <p style={{ color: "red" }}>{errMessage}</p>}

      <div className="border w-full flex flex-wrap justify-center gap-2 p-1  bg-white">
        {Array.isArray(message) && message.length > 0 ? (
          message.map((element, index) => (
            <div
              key={index}
              className="text-white border p-1 rounded-lg bg-black w-full  md:w-1/3 lg:w-1/4  flex-grow  lg:max-w-[300px]"
            >
              <Card pass={element} />
            </div>
          ))
        ) : (
          <p>No result</p>
        )}
      </div>
    </>
  );
};

export default MoviePortal;
