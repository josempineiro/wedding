import { render, fireEvent, getAllByRole } from "@testing-library/react";
import { TagsField } from "./TagsField";

describe("TagsField", () => {
  const onChangeMock = jest.fn();
  const onAddMock = jest.fn();

  const props = {
    name: "tags",
    label: "Tags",
    error: "Invalid tags",
    value: ["tag1", "tag2"],
    onChange: onChangeMock,
    onAdd: onAddMock,
  };

  beforeEach(() => {
    onChangeMock.mockClear();
    onAddMock.mockClear();
  });

  it("should render correctly", () => {
    const { container, getByRole } = render(<TagsField {...props} />);
    const input = getByRole("textbox") as HTMLInputElement;
    expect(container).toMatchSnapshot();
    expect(input).toBeInTheDocument();
  });

  it("should delete a tag when the close button is clicked", () => {
    const { getByLabelText, getByText, getByRole, getAllByRole } = render(
      <TagsField {...props} />
    );
    const deleteButton = getAllByRole("delete-tag");
    fireEvent.click(deleteButton[0]);
    expect(onChangeMock).toHaveBeenCalledWith(["tag2"]);
  });

  it("should add a new tag when Enter is pressed", () => {
    const { getByRole } = render(<TagsField {...props} />);
    const input = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "tag3" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onChangeMock).toHaveBeenCalledWith(["tag1", "tag2", "tag3"]);
    expect(onAddMock).toHaveBeenCalledWith("tag3");
  });

  it("should not add a new tag when Enter is pressed and input value is empty", () => {
    const { getByRole } = render(<TagsField {...props} />);
    const input = getByRole("textbox") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.keyDown(input, { key: "Enter" });
    expect(onChangeMock).not.toHaveBeenCalled();
    expect(onAddMock).not.toHaveBeenCalled();
  });

  it("should not delete a tag when disabled", () => {
    const { queryByRole } = render(<TagsField {...props} disabled />);
    const deleteButton = queryByRole("delete-tag");
    expect(deleteButton).toBeNull();
  });

  it("should not delete a tag when readOnly", () => {
    const { queryByRole } = render(<TagsField {...props} readOnly />);
    const deleteButton = queryByRole("delete-tag");
    expect(deleteButton).toBeNull();
  });
  it("should show all tags when the show more button is clicked", () => {
    const { getByText, getByRole } = render(
      <TagsField
        {...props}
        value={["tag1", "tag2", "tag3", "tag4"]}
        maxTagsToShow={2}
      />
    );
    const showMoreButton = getByRole("more-tags");
    fireEvent.click(showMoreButton);
    expect(getByRole("textbox")).toBeInTheDocument();
  });
});
