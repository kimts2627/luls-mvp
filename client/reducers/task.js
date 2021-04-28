export const HANDLE_CURRENT_TASK = "task/HANDLE_CURRENT_TASK";
export const HANDLE_TASK_POST_MODAL = "task/HANDLE_TASK_POST_MODAL";
export const HANDLE_MODIFY_TASK_INFO = "task/HANDLE_MODIFY_TASK_INFO";

export const handleCurrentTask = (post) => ({
  type: HANDLE_CURRENT_TASK,
  payload: {
    post,
  },
});

export const handleModifyTaskInfo = (info) => ({
  type: HANDLE_MODIFY_TASK_INFO,
  payload: {
    info,
  },
});

export const handleTaskPostModal = () => ({
  type: HANDLE_TASK_POST_MODAL,
});

export const initialState = {
  currentTaskPost: {},
  isTaskPostModal: false,
  modifyTaskinfo: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CURRENT_TASK:
      return Object.assign({}, state, { currentTaskPost: action.payload.post });
    case HANDLE_TASK_POST_MODAL:
      return Object.assign({}, state, {
        isTaskPostModal: !state.isTaskPostModal,
      });
    case HANDLE_MODIFY_TASK_INFO:
      return Object.assign({}, state, { modifyTaskinfo: action.payload.info });
    default:
      return state;
  }
};

export default reducer;
