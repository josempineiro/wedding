import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Tags } from "@/components/core/forms/tags-field/Tags";

describe("Tags component", () => {
  const tags = ["Tag 1", "Tag 2", "Tag 3"];
  const onClose = jest.fn();

  it("should render visible tags", () => {
    const { container } = render(<Tags tags={tags} maxTagsToShow={2} />);

    const visibleTags = screen.getAllByRole("tag");

    expect(visibleTags).toHaveLength(2);
    expect(visibleTags[0]).toHaveTextContent("Tag 1");
    expect(visibleTags[1]).toHaveTextContent("Tag 2");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render hidden tags when click in more tags", () => {
    const { container } = render(
      <Tags tags={tags} maxTagsToShow={2} onClose={onClose} />
    );

    const moreTag = screen.getByRole("more-tags");

    fireEvent.click(moreTag);

    const visibleTags = screen.getAllByRole("tag");

    expect(visibleTags).toHaveLength(3);
    expect(visibleTags[0]).toHaveTextContent("Tag 1");
    expect(visibleTags[1]).toHaveTextContent("Tag 2");
    expect(visibleTags[2]).toHaveTextContent("Tag 3");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should call onClose when closing a tag", () => {
    render(<Tags tags={tags} closable onClose={onClose} />);

    const closeButtons = screen.getAllByRole("delete-tag");

    fireEvent.click(closeButtons[0]);

    expect(onClose).toHaveBeenCalledWith("Tag 1");
  });
});
