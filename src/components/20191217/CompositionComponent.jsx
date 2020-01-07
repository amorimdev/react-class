import React from "react";

function Composition() {
  return <h4>This is a composition!</h4>;
}

function ComponentChildren(props) {
  return (
    <div>
      <h2>{props.header}</h2>
      {props.children}
      <h2>{props.footer}</h2>
    </div>
  );
}

export default () => (
  <div>
    <h1>Composition Component!</h1>
    <ComponentChildren header="Component children!" footer="Finish!">
      <Composition />
    </ComponentChildren>
  </div>
);
