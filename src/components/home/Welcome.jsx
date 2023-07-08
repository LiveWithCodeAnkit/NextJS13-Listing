"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Title from "../title/Title";

const Welcome = () => {
  const router = useRouter();

  return (
    <>
      <div>
        <Title heading={"Titles"} />
        <div className="flex justify-start items-start flex-wrap p-44 gap-6">
          <button
            className="bg-gray-600 py-24 px-16 rounded-xl"
            onClick={() => {
              router.push("/series");
            }}
          >
            <h1 className="text-white text-2xl font-bold ">SERIES</h1>
          </button>
          <button
            className="bg-gray-600 py-24 px-16 rounded-xl"
            onClick={() => {
              router.push("/movies");
            }}
          >
            <h1 className="text-white text-2xl font-bold">Movies</h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
