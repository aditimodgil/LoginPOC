import configureStore from 'redux-mock-store';
import thunk , {ThunkDispatch} from 'redux-thunk';
import * as firebase from "../../firebase";
import {authUser,authStart,authSuccess,authFail} from "./auth";
import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "./types";
import {AnyAction} from "redux";
import {RootState} from "../store";



// const initialState = {};
// type State = typeof initialState;
// const middlewares = [thunk];
// const mockStore = configureStore<RootState, ThunkDispatch<State, any, AnyAction>>(middlewares);
// const reduxStore = mockStore();


describe('auth actions redux', () => {
    const mockStore = configureStore();
    const reduxStore = mockStore();
  
    beforeEach(() => {
      reduxStore.clearActions();
    });
  
    
      it('should dispatch the auth start action', () => {
          const expectedActions = [
              {
                  type: AUTH_START,
              },
          ];
          reduxStore.dispatch(authStart());
  
          expect(reduxStore.getActions()).toEqual(expectedActions);
      });

      it('should dispatch the auth success action', () => {
        const expectedActions = [
            {
                type: AUTH_SUCCESS,
                idToken : "sometoken",
                userId : "userId"
            },
        ];
        reduxStore.dispatch(authSuccess("sometoken", "userId"));

        expect(reduxStore.getActions()).toEqual(expectedActions);
    });

    it('should dispatch the auth fail action', () => {
        const expectedActions = [
            {
                type: AUTH_FAIL,
                error: "error"
            },
        ];
        reduxStore.dispatch(authFail("error"));

        expect(reduxStore.getActions()).toEqual(expectedActions);
    });


    describe('authentication using firebase auth', ()=>{
        const responseDataOnResolve = {
            token : "validtoken",
            userid : "validid",
            error : null
        }
        const responseDataOnReject = {
            token : null,
            userid : null,
            error : "message"
        }

        const mockFirebaseAuthOnResolve = (authResponse : any) =>
        jest
        .spyOn(firebase,'authapi')
        .mockImplementation(():any => Promise.resolve(authResponse));
           
        const mockFirebaseAuthOnReject = (authResponse : any) =>
        jest
        .spyOn(firebase,'authapi')
        .mockImplementation(():any => Promise.resolve(authResponse));

        it('should dispatch the auth start and auth success action on resolve', ()=>{
          
            mockFirebaseAuthOnResolve(responseDataOnResolve);
            const expectedActions = [
                {
                    type: AUTH_START,
                },
                {
                    type: AUTH_SUCCESS,
                    idToken : "sometoken",
                    userId : "userId"
                },
            ];

            

            // reduxStore.dispatch(authUser("email","password",true))
            //     // return of async actions
            // expect(reduxStore.getActions()).toEqual(expectedActions)
              
        })
    })

  });