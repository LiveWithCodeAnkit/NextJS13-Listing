import React from "react";

const Welcome = () => {
  return (
    <>
      <div>
        <div className="bg-gray-800 p-5 text-white">
          <h1 className="text-3xl font-semibold">Popular Titles</h1>
        </div>
        <div className="flex justify-start items-start flex-wrap p-44 gap-6">
          <div className="bg-gray-600 py-24 px-16 rounded-xl"><h1  className="text-white text-2xl font-bold ">SERIES</h1></div>
          <div className="bg-gray-600 py-24 px-16 rounded-xl"><h1 className="text-white text-2xl font-bold">Movies</h1></div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
