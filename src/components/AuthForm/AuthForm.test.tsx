import React from 'react';
import AuthForm from './index';
import {shallow} from 'enzyme';


describe('<AuthForm />', ()=>{
    const props ={
      submit : jest.fn(),
      children : React.Children
    }
    it('should render without errors', ()=>{
      const wrapper = shallow(<AuthForm {...props} />);
      expect(wrapper.find('AuthForm')).toMatchSnapshot();

    });
})
