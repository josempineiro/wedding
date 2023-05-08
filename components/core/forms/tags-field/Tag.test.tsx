import { render, screen, fireEvent } from "@testing-library/react";
import { Tag } from "./Tag";

describe("Tag", () => {
  it("renders tag with text", () => {
    const onClose = jest.fn();
    render(<Tag onClose={onClose}>Test Tag</Tag>);

    const tagElement = screen.getByText("Test Tag");
    expect(tagElement).toBeInTheDocument();
  });

  it("renders tag with close button", () => {
    const onClose = jest.fn();
    render(
      <Tag onClose={onClose} closable>
        Test Tag
      </Tag>
    );

    const closeButton = screen.getByRole("delete-tag");
    expect(closeButton).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(
      <Tag onClose={onClose} closable>
        Test Tag
      </Tag>
    );

    const closeButton = screen.getByRole("delete-tag");
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });
});
