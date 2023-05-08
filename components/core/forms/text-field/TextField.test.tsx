import React from "react";
import { render, screen } from "@testing-library/react";
import { TextField } from "./TextField";

describe("TextField", () => {
  const onChangeSpy = jest.fn();
  const props = {
    name: "test",
    label: "test",
    onChange: onChangeSpy,
  };

  it("renders correctly", () => {
    render(<TextField {...props} />);
    expect(screen.getByLabelText("test")).toBeInTheDocument();
  });

  it("passes props to Input component", () => {
    const inputRef = React.createRef<HTMLInputElement>();
    render(<TextField {...props} type="email" inputRef={inputRef} />);
    const input = screen.getByLabelText("test") as HTMLInputElement;
    expect(input.type).toBe("email");
    expect(inputRef.current).toBe(input);
  });

  it("passes props to Field component", () => {
    render(<TextField {...props} label="Test Label" error="Test Error" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByText("Test Error")).toBeInTheDocument();
  });
});
