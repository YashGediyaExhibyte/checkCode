import { useState } from "react";

interface CounterProps {
  step?: number;
}

const useCounter = ({ step = 1 }: CounterProps = {}) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  const reset = () => {
    setCount(0);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;
