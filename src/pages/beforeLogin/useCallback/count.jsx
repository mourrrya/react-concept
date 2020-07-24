import React from "react";

const Count = ({ description, update }) => {
  console.log(`${description}`);
  return (
    <div>
      <h3>
        {description} {update}
      </h3>
    </div>
  );
};

export default React.memo(Count);
