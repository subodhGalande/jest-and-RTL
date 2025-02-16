import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counterTwo";
import user from "@testing-library/user-event";

test("handlers are called", async () => {
  const handleIncrement = jest.fn();
  const handleDecrement = jest.fn();
  render(
    <CounterTwo
      count={0}
      handleDecrement={handleDecrement}
      handleIncrement={handleIncrement}
    />
  );
  const incButton = screen.getByRole("button", {
    name: "Increment",
  });
  const deButton = screen.getByRole("button", {
    name: "Decrement",
  });

  await user.click(incButton);
  await user.click(deButton);

  expect(handleIncrement).toHaveBeenCalledTimes(1);
  expect(handleDecrement).toHaveBeenCalledTimes(1);
});
