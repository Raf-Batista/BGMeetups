import React from "react";
import { shallow } from "enzyme";
import Navbar from "../../components/Navbar";

/**
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props -Component props specific to this setup
 * @param {any} state - Initial state for setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}, state = null) => {
  return shallow(<Navbar {...props} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {String} val - value of data-test attribute for search
 * @returns {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders the navbar component", () => {
  const wrapper = setup();
  const navbarComponent = findByTestAttr(wrapper, "component-navbar");

  expect(navbarComponent.length).toBe(1);
});

test("renders the links", () => {
  const wrapper = setup();
  const link = findByTestAttr(wrapper, "link-navbar");

  expect(link.length).toBe(4);
});
