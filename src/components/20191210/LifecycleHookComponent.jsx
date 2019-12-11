import React, { useState, useEffect } from "react";

export default props => {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(timerID);
    };
  }, [props]);

  return (
    <div>
      <h1>Lifecycle Hook Component!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
};
