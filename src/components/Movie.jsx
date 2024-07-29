/* eslint-disable react/prop-types */
const Movie = ({ movie }) => {
  return (
    <div className="text-center w-80 h-96 rounded-lg cursor-pointer">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        className="h-full w-full object-fill rounded-lg"
      />
      <p className="mt-2">{`${movie.Title}`}</p>
    </div>
  );
};

export default Movie;
