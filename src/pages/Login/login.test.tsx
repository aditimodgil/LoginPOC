import React from 'react';
import Login from './index';
import {shallow,mount} from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";



const simulateInputEvent = (wrapper :any, inputSelector : any, newVal : any )=>{
 const input = wrapper.find(inputSelector);
 input.simulate('change',{
     target : { value : newVal}
 })
  return input
}

const initialState ={

}

const middlewares = [thunk];
const mockStoreConfigure = configureStore(middlewares);
const store = mockStoreConfigure({ ...initialState });
const originalDispatch = store.dispatch;
store.dispatch = jest.fn(originalDispatch);

const historyMock = { push: jest.fn() };



describe('<Login />', ()=>{
    let wrapper :any;
    const props ={
        uid : "validuserid",
        error : null,
        loading : true
    }
   beforeEach(()=>{
    wrapper = mount(
        <Provider store={store}>
          <Router>
          <Login {...props}/>
          </Router>
        </Provider>
      );
   })

 it('should update state ',()=>{
     
    const emailInput = simulateInputEvent(wrapper, 'TextField[type="text"]', 'testemail');
    const passwordInput = simulateInputEvent(wrapper,'TextField[type="password"]', "123456" );
 
    expect(emailInput.props().value).toEqual('testemail');
    expect(passwordInput.props().value).toEqual('123456');
 })

 

})