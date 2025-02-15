import { render, screen } from "@testing-library/react";
import Greet from "./greet";

describe("Greet", () => {
  test("greet says hello succeeded", () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("greet with name rendered successfully", () => {
    render(<Greet name="typescript" />);
    const nameText = screen.getByText(/hello typescript/i);
    expect(nameText).toBeInTheDocument();
  });
});
