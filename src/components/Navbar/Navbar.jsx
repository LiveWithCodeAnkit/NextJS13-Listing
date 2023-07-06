import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-600 flex justify-around p-5 text-white">
        <h1 className="text-3xl font-semibold">DEMO Streaming</h1>
        <div className="flex  justify-center items-center gap-4">
          <button>Log in</button>
          <button className="bg-slate-700 p-2">Start your free trial</button>
        </div>
      </div>
     
    </>
  );
};

export default Navbar;
