import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "@/components/core/forms/input/Input";

describe("Input", () => {
  it("renders correctly", () => {
    const { getByRole } = render(<Input />);
    const input = getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });

  it("calls onChange handler when text is entered", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith("test", expect.any(Object));
  });
});
