import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL} from "../actions/types";
import authReducer from "./authReducer";

describe('auth reducer', () => {
    it('AUTH_START expected state ', () => {
      
    const expectedState = {
    token: null,
    userId: null,
    error: null,
    loading: true
    }
      const updatedState = authReducer(undefined, {
        type: AUTH_START
      });
  
      
      expect(updatedState).toEqual(expectedState);
    });

    it('AUTH_SUCCESS expected state ', () => {
      
        const expectedState = {
        token: "somevalidtoken",
        userId: "somvaliduid",
        error: null,
        loading: false
        }

        const updatedState = authReducer(undefined, {
            type: AUTH_SUCCESS,
            idToken: "somevalidtoken",
            userId : "somvaliduid"
        });
      
          
          expect(updatedState).toEqual(expectedState);
        });

        it('AUTH_FAIL expected state ', () => {
      
            const expectedState = {
            token: null,
            userId: null,
            error: "errmessage",
            loading: false
            }
    
            const updatedState = authReducer(undefined, {
                type: AUTH_FAIL,
                error: "errmessage"
            });
          
              
              expect(updatedState.error).toEqual(expectedState.error);
            });     
        
  });