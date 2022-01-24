import * as type from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: null,
  userId: null,
};

const authState = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.SIGNED_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case type.SIGNED_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
export default authState;
