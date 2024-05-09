import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Counter = () => {
	const { store, actions } = useContext(Context);
  const [seconds, setSeconds] = useState(20);
  const [pausa, setPausa] = useState(1);

  useEffect(()=>{
    if (store.contadorPausa) {
      setPausa(0)
    } else if (store.contadorReinicio ) {
      setSeconds(20)
      setPausa(1)
    }
  },[store.contadorPausa, store.contadorReinicio ])

  useEffect(() => {
    let interval = null;

    if (seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - pausa);
      }, 1000);
    } else {
      clearInterval(interval);
      console.log("termine");
      actions.contador()
    }

    return () => clearInterval(interval);
  }, [seconds]);

  const percentage = (seconds / 20) * 100; // Calculate the percentage based on remaining time

  // Determine color based on remaining time
  const color = seconds <= 5 ? "red" : "#3e98c7"; // Original color: #3e98c7

  return (
    <div label="Custom animation speed" className="counTer mb-5">
      <CircularProgressbar
        value={percentage}
        text={`${seconds} s`}
        strokeWidth={8}
        styles={buildStyles({
          strokeLinecap: "butt",
          textSize: "0.7rem", // Adjust textSize if necessary
          pathTransitionDuration: 0.15,
          pathColor: color, // Set progress bar color dynamically
          textColor: color === "red" ? "red" : "inherit", // Set text color dynamically
        })}
      />
    </div>
  );
};

export default Counter;
