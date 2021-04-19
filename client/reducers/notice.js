export const HANDLE_NOTICE = "notice/HANDLE_NOTICE";

export const handleNotice = (notices) => ({
  type: HANDLE_NOTICE,
  payload: {
    notices,
  },
});

export const initialState = {
  notices: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_NOTICE:
      return Object.assign({}, state, {
        notices: action.payload.notice,
      });
    default:
      return state;
  }
};

export default reducer;
