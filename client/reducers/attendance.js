export const HANDLE_FALSY_STATUS = "attendance/HANDLE_FALSY_STATUS";

export const handleFalsyStatus = (statusInfo) => ({
  type: HANDLE_FALSY_STATUS,
  payload: {
    statusInfo,
  },
});

export const initialState = {
  falsyStatus: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_FALSY_STATUS:
      return Object.assign({}, state, {
        falsyStatus: action.payload.statusInfo,
      });
    default:
      return state;
  }
};

export default reducer;
