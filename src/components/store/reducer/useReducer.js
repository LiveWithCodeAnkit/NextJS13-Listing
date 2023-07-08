import data from "../../../app/sample.json";

const initialState = {
  series: [],
  movies: [],
};

const listStreamingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SERIES":
      const filteredSeries = data.entries.filter(
        (entry) => entry.programType === "series" && entry.releaseYear >= 2010
      );
      const sortedSeries = filteredSeries.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      // const seriesData = data.entries.filter(
      //   (entry) => entry.programType === "series"
      // );
      return {
        ...state,
        series: sortedSeries,
      };

    case "MOVIES":
      const filteredMovies = data.entries.filter(
        (entry) => entry.programType === "movie" && entry.releaseYear >= 2010
      );
      const sortedMovies = filteredMovies.sort((a, b) =>
        a.title.localeCompare(b.title)
      );

      // const moviesData = data.entries.filter(
      //   (entry) => entry.programType === "movie"
      // );
      return {
        ...state,
        movies: sortedMovies,
      };

    default:
      return state;
  }
};

export default listStreamingReducer;
