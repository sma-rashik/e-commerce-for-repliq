import React from "react";
import errorImg from "../../assets/error.png";

const ErrorPage = () => {
  return (
    <div>
      {/*
      Graphic from https://www.opendoodles.com/
  */}

      <div className="grid h-screen px-4 bg-white place-content-center">
        <div className="text-center">
          <img className="h-96 w-96" src={errorImg} alt="" />

          <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Uh-oh!
          </h1>

          <p className="mt-4 text-gray-500">We can't find that page.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
