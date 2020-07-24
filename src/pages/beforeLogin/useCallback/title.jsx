import React from "react";

const Title = () => {
  console.log("title render");
  return (
    <div>
      <h1>Title</h1>
    </div>
  );
};

export default React.memo(Title);
