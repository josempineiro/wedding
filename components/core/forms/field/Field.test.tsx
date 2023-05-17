import { render, screen } from "@testing-library/react";
import { Field } from "@/components/core/forms/field";

describe("Field", () => {
  it("renders label and children props", () => {
    render(
      <Field type="text" name="test" label="Test Label">
        <span>Test Children</span>
      </Field>
    );
    const labelElement = screen.getByText(/Test Label/);
    const childrenElement = screen.getByText(/Test Children/);
    expect(labelElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });

  it("renders error prop", () => {
    render(
      <Field name="test" type="text" errors={["Test Error"]}>
        <span>Test Children</span>
      </Field>
    );
    const errorElement = screen.getByText(/Test Error/);
    expect(errorElement).toBeInTheDocument();
  });

  it("does not render error prop when it is not provided", () => {
    render(
      <Field type="text" name="test">
        <span>Test Children</span>
      </Field>
    );
    const errorElement = screen.queryByText(/Test Error/);
    expect(errorElement).not.toBeInTheDocument();
  });
});
