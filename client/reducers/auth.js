export const HANDLE_TOKEN = "auth/HANDLE_TOKEN";
export const HANDLE_LOGIN_MODAL = "auth/HANDLE_LOGIN_MODAL";
// export const HANDLE_AUTH = "auth/HANDLE_AUTH";

export const handleToken = (token) => ({
  type: HANDLE_TOKEN,
  payload: {
    token,
  },
});

export const handleLoginModal = () => ({
  type: HANDLE_LOGIN_MODAL,
});

// export const handleAuth = () => ({
//   type: HANDLE_AUTH,
// });

export const initialState = {
  token: null,
  isLoginModalOn: false,
  // isAuth: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_TOKEN:
      return Object.assign({}, state, { token: action.payload.token });
    case HANDLE_LOGIN_MODAL:
      return Object.assign({}, state, {
        isLoginModalOn: !state.isLoginModalOn,
      });
    // case HANDLE_AUTH:
    //   return Object.assign({}, state, { isAuth: !isAuth });
    default:
      return state;
  }
};

export default reducer;
