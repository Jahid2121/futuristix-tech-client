import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
    <div className="flex  mt-36 justify-center">
      <img
        className="text-center "
        src={"https://i.ibb.co/bX4PBMV/Animation-1697811465351.gif"}
        alt=""
      />

    </div>
    <h2 className="text-center  -mt-10 font-bold mb-3 text-6xl">Oops!</h2>
    <h3 className="text-center text-2xl font-medium mb-3">PAGE NOT FOUND</h3>

      <button className="btn text-white bg-blue-600 flex justify-center mx-auto" onClick={handleGoBack}>Go Back</button></>
  );
};

export default ErrorPage;
