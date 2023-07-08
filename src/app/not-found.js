import Title from "@/components/title/Title";

const Error = () => {
  return (
    <>
      <Title heading={"Titles"} />
      <div className="flex justify-center items-start text-center p-20">
        <div className="flex flex-col">
          <h1 className="font-extrabold text-3xl">
            Oops Something went wrong......
          </h1>
        </div>
      </div>
    </>
  );
};

export default Error;
