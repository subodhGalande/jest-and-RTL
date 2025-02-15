import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("counter renders", () => {
  test("renders a count of 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("increment by 1 after click", async () => {
    user.setup();
    render(<Counter />);
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButtonElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("1");
  });

  test("increment by 2 after clicking twice", async () => {
    user.setup();
    render(<Counter />);
    const incrementButtonElement = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButtonElement);
    await user.click(incrementButtonElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });
});
