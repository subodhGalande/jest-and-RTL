import { useState } from "react";

type useCounterProps = {
  initialCount?: number;
};

export const useCounter = ({ initialCount = 0 }: useCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return { count, increment, decrement };
};
