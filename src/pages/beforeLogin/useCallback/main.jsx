import React, { useEffect, useState, useCallback } from "react";

import Button from "./button";
import Count from "./count";
import Title from "./title";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Main() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count description="age" update={age}></Count>
      <Button name="age" increment={incrementAge}></Button>
      <Count description="salary" update={salary}></Count>
      <Button name="salary" increment={incrementSalary}></Button>
      <Link to="/useMemo">Use Memo example</Link>
    </div>
  );
}
