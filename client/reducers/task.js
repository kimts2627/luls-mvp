export const HANDLE_CURRENT_TASK = "task/HANDLE_CURRENT_TASK";
export const HANDLE_TASK_POST_MODAL = "task/HANDLE_TASK_POST_MODAL";

export const handleCurrentTask = (post) => ({
  type: HANDLE_CURRENT_TASK,
  payload: {
    post,
  },
});

export const handleTaskPostModal = () => ({
  type: HANDLE_TASK_POST_MODAL,
});

export const initialState = {
  currentTaskPost: {},
  isTaskPostModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CURRENT_TASK:
      return Object.assign({}, state, { currentTaskPost: action.payload.post });
    case HANDLE_TASK_POST_MODAL:
      return Object.assign({}, state, {
        isTaskPostModal: !state.isTaskPostModal,
      });
    default:
      return state;
  }
};

export default reducer;
