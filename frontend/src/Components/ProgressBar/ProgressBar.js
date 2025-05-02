

// function ProgressBar (){
//   return (
//     <div className={styles.progressBar}>
//       <div className={styles.step}>1<br />Start</div>
//       <div className={styles.step}>2<br />In Progress</div>
//       <div className={styles.step}>3<br />Done</div>
//     </div>
//   );
// };

// export default ProgressBar;
import styles from "./ProgressBar.module.css";
import React, { useState } from "react";
import { TiTick } from "react-icons/ti";

const ProgressBar = () => {
  const steps = ["Start", "In Progress", "Reach", "Deliver Food"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`${styles.step_item} ${currentStep === i + 1 && styles.active} ${(i + 1 < currentStep || complete) && styles.complete
              } `}
          >
            <div className={styles.step}>
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {!complete && (
        <button
          className={styles.btn}
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Track Order"}
        </button>
      )}
    </>
  );
};

export default ProgressBar;