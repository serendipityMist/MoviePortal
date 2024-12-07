export const fetchMovies = async (
  searchText,
  setMessage,
  setError,
  finallyCallback
) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${searchText}&apikey=6b55b70b`
    );
    const movieData = await response.json();

    if (movieData.Response === "True") {
      const movieDetailPromises = movieData.Search.map((movie) =>
        fetchMovieDetails(movie.imdbID, setError)
      );
      const movieDetails = await Promise.all(movieDetailPromises);
      setMessage(movieDetails);
      setError(null);
    } else {
      setMessage([]);
      setError(movieData.Error);
    }
  } catch (error) {
    setMessage([]);
    setError(`You are getting this error: ${error.message}`);
  } finally {
    finallyCallback();
  }
};

const fetchMovieDetails = async (id, setError) => {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&plot=full&apikey=6b55b70b`
    );
    const data = await response.json();

    if (data.Response === "True") {
      return data;
    } else {
      throw new Error(data.Error);
    }
  } catch (error) {
    setError(`An error occurred while fetching details for movie ID: ${id}`);
  }
};
