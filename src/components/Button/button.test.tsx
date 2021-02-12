import React from 'react';
import 'jest-styled-components';
import Button from "./index";
import { shallow} from "enzyme"



describe('<Button> component', () => {
    
    const props = {
        isdisabled : false,
        children : "testing"
    }

    it('renders correctly', () => {
      const wrapper = shallow(<Button {...props}/>);
      console.log(wrapper.debug);
      expect(wrapper.find('StyledButton')).toMatchSnapshot()
    });
  });