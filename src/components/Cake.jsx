import { useEffect, useState } from "react";
import "../assets/css/cake.css";
import { CakeSVG, confetti } from "../assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";

function Cake() {
  const [candlesBlownOut, setCandlesBlownOut] = useState(false);

  useEffect(() => {
    // Automatically blow out candles after 10 seconds
    const timer = setTimeout(() => {
      setCandlesBlownOut(true);
    }, 15000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black/80 h-screen w-screen flex items-center justify-center overflow-hidden relative">
      {candlesBlownOut && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      {candlesBlownOut && (
        <motion.div
          className="absolute top-20 text-white text-3xl font-bold z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <svg width="800" height="200" viewBox="0 0 400 200">
            <defs>
              <path id="curve" d="M50,150 Q200,50 350,150" fill="transparent" stroke="white" />
            </defs>
            <text fontSize="40" fill="white" textAnchor="middle">
              <textPath href="#curve" startOffset="50%">
                Happy Birthday!
              </textPath>
            </text>
          </svg>
          <Link to="/present" className="flex justify-center items-center">
            <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-7 py-3 bg-customBlue text-white rounded-full hover:bg-blue-600 font-medium text-base text-center">
              Next Page
            </p>
          </Link>
        </motion.div>
      )}
      <div className="relative z-10">
        <div className="absolute -top-48 left-1/2 transform -translate-x-1/2">
          <div className="candle">
            {!candlesBlownOut && (
              <div>
                <div className="absolute -top-[200px] text-gray-200 text-3xl">
                  <motion.div
                    animate={{ opacity: [0, 0.25, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 8 }}
                    className="block -translate-x-[60px] translate-y-[105px] -rotate-[30deg] text-gray-200 text-xl"
                  >
                    blow
                  </motion.div>
                  <motion.div
                    animate={{ opacity: [0, 0.25, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 9 }}
                    className="block translate-x-10 translate-y-[80px] rotate-[30deg] text-gray-200 text-xl"
                  >
                    blow
                  </motion.div>
                </div>
                <div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                  <div className="flame"></div>
                </div>
              </div>
            )}
          </div>
        </div>
        <CakeSVG />
      </div>
    </div>
  );
}

export default Cake;