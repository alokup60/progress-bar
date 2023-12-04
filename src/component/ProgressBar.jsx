import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  const [filled, setFilled] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const resetHandler = () => {
    setFilled(0);
  };

  useEffect(() => {
    if (filled < 100 && isRunning) {
      let timer = setTimeout(() => {
        setFilled((prev) => (prev += 2));
      }, 50);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isRunning, filled]);

  return (
    <div className="flex flex-col gap-4 justify-center mt-[6rem] items-center">
      <div className={`w-6/12 border rounded-md text-center relative`}>
        <div
          className={`w-full h-full bg-green-300 absolute`}
          style={{ width: `${filled}%` }}
        ></div>
        <span className="text-red-500 font-semibold z-10 relative">
          {filled}%
        </span>
      </div>
      <div className="flex gap-4">
        <button
          className="bg-green-300 px-6 py-1 rounded-md text-white"
          onClick={() => setIsRunning(true)}
        >
          Run
        </button>
        <button
          className=" px-6 py-1 rounded-md bg-red-500 text-white"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
