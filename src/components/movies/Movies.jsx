"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieList } from "../store/action";
import Title from "../title/Title";

const Movies = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(movieList());
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleImgLoadingError = (e) => {
    e.target.src = "/imgNotfound.gif";
  };

  const movies = useSelector((state) => state.listStream.movies);

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = movies.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Title heading="Movies" />
      <div className="p-16">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-2xl font-semibold font-Roboto">Loading...</p>
          </div>
        ) : (
          <>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {currentItems.map((moviesItem, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-start flex-wrap p-6 gap-3 font-Roboto border-blue-500 border-4 hover:border-green-400 delay-300 hover:scale-125 transition duration-500 cursor-pointer"
                >
                  <div className="w-44 border-8 hover:border-red-300">
                    <img
                      src={moviesItem.images["Poster Art"].url}
                      fill
                      onError={handleImgLoadingError}
                      alt="/404img.jpg"
                      className="hover:scale-125 transition duration-500 cursor-pointer"
                    />
                  </div>
                  <h2 className="w-52">{moviesItem.title}</h2>
                  <div className="flex justify-center items-center">
                    {" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {moviesItem.releaseYear}
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {`#${moviesItem.programType}`}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-5">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`mx-2 px-3 py-1 rounded-full border ${
                      currentPage === pageNumber ? "bg-blue-500 text-white" : ""
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Movies;
