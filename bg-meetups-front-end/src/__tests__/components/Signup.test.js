import React from 'react'; 
import { shallow } from 'enzyme'; 
import Signup from '../../components/Signup'; 

const setup = (props = {}, state = null) => {
    return shallow(<Signup {...props} />);
  };


const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

test('it renders the buttons for oauth login', () => {
    const wrapper = setup(); 
    const buttons = findByTestAttr(wrapper, 'button-oauth');

    expect(buttons.length).toBe(3);
});