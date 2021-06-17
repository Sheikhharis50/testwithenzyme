import React from "react";
import { shallow } from "enzyme";
import Header from ".";
import { findByTestAttr } from "../../utils";

const setupComponent = (props = {}) => {
  return shallow(<Header {...props} />);
};

describe("Header Component", () => {
  let component;

  beforeEach(() => {
    component = setupComponent();
  });

  it("It should render without header", () => {
    const wrapper = findByTestAttr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("It should render a logo", () => {
    const wrapper = findByTestAttr(component, "logoIMG");
    expect(wrapper.length).toBe(1);
  });

  it("It should render a heading", () => {
    const wrapper = findByTestAttr(component, "heading");
    expect(wrapper.length).toBe(1);
  });
});
