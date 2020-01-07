import React from "react";

const numbers = [1, 2, 3, 4, 5, 6];

export default () => {
  const listItems = numbers.map(number => {
    return (
      <li key={number.toString()}>{number}</li>
    );
  });
  return <ul>{listItems}</ul>;
};
