import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>State Hook Component!</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
