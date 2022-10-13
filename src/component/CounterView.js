import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../features/counter/counterSlice";
const CounterView = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(10));
  };
  const handleDecrement = () => {
    dispatch(decrement(5));
  };
  const handleReset = () => {
    dispatch(reset());
  };

  

  return (
    <div>
      <h1>Counter App</h1>
      <h1>Count: {count}</h1>

      <button
        style={{
          margin: "5px",
          padding: "10px",
          textAlign: "center",
          fontSize: "20px",
        }}
        onClick={handleIncrement}
      >
        INCREMENT
      </button>
      <button
        style={{
          margin: "5px",
          padding: "10px",
          textAlign: "center",
          fontSize: "20px",
        }}
        onClick={handleDecrement}
      >
        DECREMENT
      </button>
      <button
        style={{
          margin: "5px",
          padding: "10px",
          textAlign: "center",
          fontSize: "20px",
        }}
        onClick={handleReset}
      >
        RESET
      </button>
    </div>
  );
};

export default CounterView;
