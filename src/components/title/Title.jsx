import React from "react";

const Title = ({heading}) => {
  return (
    <>
      <div className="bg-gray-800 p-5 text-white">
        <h1 className="text-3xl font-semibold">Popular {heading}</h1>
      </div>
    </>
  );
};

export default Title;
