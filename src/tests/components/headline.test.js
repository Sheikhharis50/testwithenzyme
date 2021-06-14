import React from "react";
import { shallow } from "enzyme";
import Headline from "../../components/headline";
import { checkProps, findByTestAttr } from "../../utils";

const setupComponent = (props = {}) => {
  return shallow(<Headline {...props} />);
};

describe("Headline Component", () => {
  describe("Have props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description",
      };
      wrapper = setupComponent(props);
    });

    it("Should render without errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(1);
    });

    it("Should render header", () => {
      const header = findByTestAttr(wrapper, "header");
      expect(header.length).toBe(1);
    });

    it("Should render a desc", () => {
      const description = findByTestAttr(wrapper, "desc");
      expect(description.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setupComponent();
    });

    it("Should render without errors", () => {
      const component = findByTestAttr(wrapper, "HeadlineComponent");
      expect(component.length).toBe(0);
    });
  });

  describe("Checking proptypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
      };
      expect(checkProps(Headline, expectedProps)).toBeUndefined();
    });
  });
});
