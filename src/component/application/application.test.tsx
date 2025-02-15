import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("application", () => {
  test("renders correctly", () => {
    render(<Application />);
    // const nameElement = screen.getByRole("button");
    // expect(nameElement).toBeInTheDocument();

    const jobrole = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(jobrole).toBeInTheDocument();

    const bioRole = screen.getByRole("textbox", {
      name: "Bio", //this is casesensitive
    });
    expect(bioRole).toBeInTheDocument();

    const H1Role = screen.getByRole("heading", {
      name: "Job application form", //using name option
    });
    expect(H1Role).toBeInTheDocument();

    const H2Role = screen.getByRole("heading", {
      level: 2, //using level option
    });
    expect(H2Role).toBeInTheDocument();

    const nameByLabelInput = screen.getByLabelText("Name", {
      selector: "input",
    });
    expect(nameByLabelInput).toBeInTheDocument();

    const getByPlaceholderText = screen.getByPlaceholderText("Fullname");
    expect(getByPlaceholderText).toBeInTheDocument();

    // const textElement = screen.getByText("All fields are mandatory") - by string
    // const textElement = screen.getByText(/fields/i); - by regex
    const textElement = screen.getByText((content) =>
      content.includes("fields")
    );
    expect(textElement).toBeInTheDocument();

    const nameElement2 = screen.getByDisplayValue("Vishwas");
    expect(nameElement2).toBeInTheDocument();
  });
});
