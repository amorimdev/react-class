import React, { useState } from "react";

function ComponentChildren(props) {
  return (
    <div>
      <button onClick={props.clickedIncrement}>Click</button>
      <h4>You clicked {props.clicked}</h4>
    </div>
  );
}

export default () => {
  const [clicked, setClicked] = useState(0);
  const clickedIncrement = () => setClicked(clicked + 1);

  return (
    <div>
      <h1>Lifting State Up Component!</h1>
      <ComponentChildren
        clickedIncrement={clickedIncrement}
        clicked={clicked}
      />
      <ComponentChildren
        clickedIncrement={clickedIncrement}
        clicked={clicked}
      />
    </div>
  );
};
