import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed inset-0 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/src/assets/landing.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* BUTTON WRAPPER */}
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() => navigate("/home")}
          className="
            inline-flex
            items-center
            justify-center
            w-auto
            min-w-0
            px-6
            py-2
            text-sm
            font-semibold
            bg-green-600
            text-white
            rounded-md
            shadow-md
            hover:bg-green-700
            focus:outline-none
          "
          style={{
            width: "auto",
            maxWidth: "fit-content",
          }}
        >
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Landing;
