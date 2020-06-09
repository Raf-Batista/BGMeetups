import React from "react";
import { shallow } from "enzyme";
import Navbar from "../../components/Navbar";

test("renders the navbar component", () => {
  const wrapper = shallow(<Navbar />);
  const navbarComponent = wrapper.find("[data-test='component-navbar']");

  expect(navbarComponent.length).toBe(1);
});

test("renders the links", () => {
  const wrapper = shallow(<Navbar />);
  const link = wrapper.find("[data-test='link-navbar']");

  expect(link.length).toBe(4);
});
