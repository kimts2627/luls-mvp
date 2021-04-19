export const HANDLE_LOGIN_MODAL = "auth/HANDLE_LOGIN_MODAL";
export const HANDLE_LOGIN = "auth/HANDLE_LOGIN";
export const HANDLE_LOGOUT = "auth/HANDLE_LOGOUT";
export const HANDLE_SIGNUP_MODAL = "auth/HANDLE_SIGNUP_MODAL";
export const HANDLE_SIGNUP_INFO = "auth/HANDLE_SIGNUP_INFO";
export const HANDLE_USERINFO = "auth/HANDLE_USERINFO";
export const SET_ALERT = "auth/SET_ALERT";

export const handleLoginModal = () => ({
  type: HANDLE_LOGIN_MODAL,
});

export const handleSignupModal = () => ({
  type: HANDLE_SIGNUP_MODAL,
});

export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});

export const handleSignupInfo = (info) => ({
  type: HANDLE_SIGNUP_INFO,
  payload: {
    info,
  },
});

export const handleUserInfo = (userInfo) => ({
  type: HANDLE_USERINFO,
  payload: {
    userInfo,
  },
});

export const setAlert = (status) => ({
  type: SET_ALERT,
  payload: {
    status,
  },
});

export const initialState = {
  isLoginModalOn: false,
  isSignupModalOn: false,
  isAuth: false,
  authAlert: null,
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
  userInfo: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_LOGIN_MODAL:
      return Object.assign({}, state, {
        isLoginModalOn: !state.isLoginModalOn,
      });
    case HANDLE_SIGNUP_MODAL:
      return Object.assign({}, state, {
        isSignupModalOn: !state.isSignupModalOn,
      });
    case HANDLE_LOGIN:
      return Object.assign({}, state, { isAuth: true });
    case HANDLE_LOGOUT:
      return Object.assign({}, state, { isAuth: false });
    case HANDLE_SIGNUP_INFO:
      return Object.assign({}, state, { signUpInfo: action.payload.info });
    case HANDLE_USERINFO:
      return Object.assign({}, state, { userInfo: action.payload.userInfo });
    case SET_ALERT:
      return Object.assign({}, state, { authAlert: action.payload.status });
    default:
      return state;
  }
};

export default reducer;
