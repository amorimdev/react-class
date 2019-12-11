import React, { useState, useEffect } from "react";

export default () => {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div>
      <h1>Lifecycle Hook Component!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};
