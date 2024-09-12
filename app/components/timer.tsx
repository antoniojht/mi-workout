"use client";

import { useEffect, useState } from "react";

export default function Timer({ time }: Readonly<{ time: number }>) {
  const [counter, setCounter] = useState(time);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [counter]);

  return (
    <div className="App">
      <div>
        Tiempo:{" "}
        {`${Math.floor(counter / 60)
          .toString()
          .padStart(2, "0")}:${(counter % 60).toString().padStart(2, "0")}`}
      </div>
    </div>
  );
}
