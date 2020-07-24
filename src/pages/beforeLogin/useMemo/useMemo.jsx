import React, { useState, useMemo, useCallback } from "react";
import Button from "./button";
const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementOne = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const incrementTwo = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  const isEven = useMemo(() => {
    const start = Date.now();
    let i = 0;
    while (i < 2000000000) i++;
    console.log(Date.now() - start);
    if (count % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }, [count]);

  return (
    <div>
      <h1>Title </h1>
      <Button
        name="Button One"
        increment={incrementOne}
        update={count}
      ></Button>
      <span>{isEven ? "even" : "odd"}</span>
      <br />
      <Button
        name="Button Two"
        increment={incrementTwo}
        update={count2}
      ></Button>
    </div>
  );
};

export default UseMemo;
