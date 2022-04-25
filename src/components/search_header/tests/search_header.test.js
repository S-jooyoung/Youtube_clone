// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// import custom-component
import SearchHeader from "../search_header";
import userEvent from "@testing-library/user-event";

// import snapshot-testing methods
import renderer from "react-test-renderer";

describe("SearchHeader", () => {
  it("renders", () => {
    const component = renderer
      .create(<SearchHeader onSearch={jest.fn()} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
  describe("Input Sumit", () => {
    let onSearch;
    let input;
    let button;

    beforeEach(() => {
      onSearch = jest.fn();
      render(<SearchHeader onSearch={onSearch} />);
      input = screen.getByPlaceholderText("Search...");
      button = screen.getByTestId("test-button");
    });

    it("calls onSearch when button clicked", () => {
      userEvent.type(input, "BTS");
      userEvent.click(button);

      expect(onSearch).toHaveBeenCalledWith("BTS");
    });
  });
});
