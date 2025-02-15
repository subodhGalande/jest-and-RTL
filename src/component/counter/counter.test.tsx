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

  test("set amount to 10 after clicking button", async () => {
    user.setup();
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    await user.type(inputElement, "10");
    expect(inputElement).toHaveValue(10);
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    await user.click(setButton);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });

  test("tab focus check", async () => {
    user.setup();
    render(<Counter />);
    const inputElement = screen.getByRole("spinbutton");
    const setButton = screen.getByRole("button", {
      name: "Set",
    });
    const incButton = screen.getByRole("button", {
      name: "Increment",
    });

    await user.tab();
    expect(incButton).toHaveFocus();
    await user.tab();
    expect(inputElement).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
