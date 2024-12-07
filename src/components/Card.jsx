import React from "react";

const Card = ({ pass }) => {
  return (
    <>
      {pass?.Title?.length > 0 ? (
        <div className="w-full">
          <h1 className="text-3xl font-bold  mb-1 text-center">{pass.Title}</h1>
          <img
            src={pass.Poster}
            alt={`Poster of ${pass.Title}`}
            className="w-full h-auto"
          />
          <h2 className="text-2xl underline">
            Movie Released: {pass.Released || "Unknown"}
          </h2>
          <p>{pass.Plot || "Plot information is not available."}</p>
          <button className=" rounded-xl p-1 bg-white ">
            <a
              href={`https://www.imdb.com/title/${pass.imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link bold  text-black"
            >
              IMDB
            </a>
          </button>
          {pass.Title ? (
            <button className="rounded-xl p-1 bg-white bold ml-5">
              <a
                href={`https://www.youtube.com/results?search_query=${pass.Title} trailer`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link bold  text-black "
              >
                Watch Trailer
              </a>
            </button>
          ) : (
            <span className="text-gray-500 ml-4">Watch Trailer</span>
          )}
        </div>
      ) : (
        <p>Movie not found.</p>
      )}
    </>
  );
};

export default Card;
