export const HANDLE_CURRENT_TASK = "task/HANDLE_CURRENT_TASK";

export const handleCurrentTask = (post) => ({
  type: HANDLE_CURRENT_TASK,
  payload: {
    post,
  },
});

export const initialState = {
  currentTaskPost: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CURRENT_TASK:
      return Object.assign({}, state, { currentTaskPost: action.payload.post });
    default:
      return state;
  }
};

export default reducer;
