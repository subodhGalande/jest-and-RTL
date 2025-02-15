import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("skills rendered successfully", () => {
  const skills = ["html", "css", "javascript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("list item renders correctly", () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length); //do not use hardcoded values in here
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });
  test("do not renders start learning button", async () => {
    render(<Skills skills={skills} />);
    const startButton = await screen.findByRole(
      "button",
      {
        name: "Start Learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(startButton).toBeInTheDocument();
  });
});
