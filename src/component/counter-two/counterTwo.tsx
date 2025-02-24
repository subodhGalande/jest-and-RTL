type CounterTwoProps = {
  count: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
};

export const CounterTwo = (props: CounterTwoProps) => {
  return (
    <>
      <h1>Counter two</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}

      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </>
  );
};
