import React from "react";

const Button = ({ name, increment, update }) => {
  console.log(`${name}`, "count");
  return (
    <div>
      <button onClick={increment}>
        {name} {update}
      </button>
    </div>
  );
};

export default React.memo(Button);
