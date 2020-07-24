import React from "react";

const Button = ({ name, increment }) => {
  console.log(`${name}`, "count");
  return (
    <div>
      <button onClick={increment}>{name}</button>
    </div>
  );
};

export default React.memo(Button);
