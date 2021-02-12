import React from 'react';
import TextField from './index';
import {shallow} from 'enzyme';

describe('<TextField />', () => {
    const props = {
        type : "text",
        name : "email",
        placeholder : "email" }

 
    it('should render without error', ()=>{
      const wrapper = shallow(<TextField {...props}/>);
      expect(wrapper.find('TextField')).toMatchSnapshot();
    })
})
