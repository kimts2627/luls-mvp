export const HANDLE_TOKEN = "auth/HANDLE_TOKEN";
export const HANDLE_LOGIN_MODAL = "auth/HANDLE_LOGIN_MODAL";
export const HANDLE_AUTH = "auth/HANDLE_AUTH";
export const HANDLE_SIGNUP_MODAL = "auth/HANDLE_SIGNUP_MODAL";
export const HANDLE_SIGNUP_INFO = "auth/HANDLE_SIGNUP_INFO";

export const handleToken = (token) => ({
  type: HANDLE_TOKEN,
  payload: {
    token,
  },
});

export const handleLoginModal = () => ({
  type: HANDLE_LOGIN_MODAL,
});

export const handleSignupModal = () => ({
  type: HANDLE_SIGNUP_MODAL,
});

export const handleAuth = () => ({
  type: HANDLE_AUTH,
});

export const handleSignupInfo = (info) => ({
  type: HANDLE_SIGNUP_INFO,
  payload: {
    info,
  },
});

export const initialState = {
  token: null,
  isLoginModalOn: false,
  isSignupModalOn: false,
  isAuth: false,
  signUpInfo: {
    School_Name: "",
    Major: "",
    Degree: "",
    Entrance_Year: "",
    Graduation_Year: "",
    City: "",
    Country: "",
    State: "",
    Birthday: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_TOKEN:
      return Object.assign({}, state, { token: action.payload.token });
    case HANDLE_LOGIN_MODAL:
      return Object.assign({}, state, {
        isLoginModalOn: !state.isLoginModalOn,
      });
    case HANDLE_SIGNUP_MODAL:
      return Object.assign({}, state, {
        isSignupModalOn: !state.isSignupModalOn,
      });
    case HANDLE_AUTH:
      return Object.assign({}, state, { isAuth: !state.isAuth });
    case HANDLE_SIGNUP_INFO:
      return Object.assign({}, state, { signUpInfo: action.payload.info });
    default:
      return state;
  }
};

export default reducer;
