import {
  CHANGE_USER_DETAILS,
  CHANGE_PRIVACY_DETAILS,
  DISPLAY_USER_ERROR,
  SUBMIT_USER_DETAILS,
  SUBMIT_PRIVACY_DETAILS,
} from "../constants";

const initialState = {
  user: {
    completed: false,
    error: "",
    name: "",
    role: "",
    email: "",
    password: "",
  },
  privacy: {
    completed: false,
    updates: false,
    communication: false,
  },
};
const reducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case CHANGE_USER_DETAILS:
      return {
        ...state,
        user: { ...state.user, [payload.id]: payload.value },
      };
    case SUBMIT_USER_DETAILS:
      return {
        ...state,
        user: { ...state.user, completed: payload.boolean },
      };
    case DISPLAY_USER_ERROR:
      return {
        ...state,
        user: { ...state.user, error: payload.error },
      };
    case CHANGE_PRIVACY_DETAILS:
      return {
        ...state,
        privacy: { ...state.privacy, [payload.id]: payload.boolean },
      };

    case SUBMIT_PRIVACY_DETAILS:
      return {
        ...state,
        privacy: { ...state.privacy, completed: payload.boolean },
      };

    default:
      return { ...state };
  }
};

export default reducer;
