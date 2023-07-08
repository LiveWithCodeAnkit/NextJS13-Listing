export const seriesList = (seriesList) => {

  return {
    type: "SERIES",
    payload: seriesList,
  };
};

export const movieList = (movieList) => {
  return {
    type: "MOVIES",
    payload: movieList,
  };
};
