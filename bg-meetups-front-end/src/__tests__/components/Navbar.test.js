import React from "react";
import { shallow } from "enzyme";
import Navbar from "../../components/Navbar";
import * as redux from 'react-redux'

jest.mock("react-redux", () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: () => jest.fn()
}));

const spy = jest.spyOn(redux, 'useSelector')
spy.mockReturnValue({ user:{} });

const setup = (props = {}, state = null) => {
  return shallow(<Navbar {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders the navbar component", () => {
  const wrapper = setup();
  const navbarComponent = findByTestAttr(wrapper, "component-navbar");

  expect(navbarComponent.length).toBe(1);
});

// test("renders the links", () => {
//   const wrapper = setup();
//   const link = findByTestAttr(wrapper, "link-navbar");

//   expect(link.length).toBe(4);
// });
