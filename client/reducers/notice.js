export const HANDLE_NOTICE = "notice/HANDLE_NOTICE";
export const HANDLE_NOTICE_MODAL = "notice/HANDLE_NOTICE_MODAL";
export const HANDLE_CURRENT_NOTICE = "notice/HANDLE_CURRENT_NOTICE";

export const handleNotice = (notices) => ({
  type: HANDLE_NOTICE,
  payload: {
    notices,
  },
});

export const handleNoticeModal = () => ({
  type: HANDLE_NOTICE_MODAL,
});

export const handleCurrentNotice = (currentNotice) => ({
  type: HANDLE_CURRENT_NOTICE,
  payload: {
    currentNotice,
  },
});

export const initialState = {
  notices: null,
  noticeModal: false,
  currentNotice: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_NOTICE:
      return Object.assign({}, state, {
        notices: action.payload.notices,
      });
    case HANDLE_NOTICE_MODAL:
      return Object.assign({}, state, { noticeModal: !state.noticeModal });
    case HANDLE_CURRENT_NOTICE:
      return Object.assign({}, state, {
        currentNotice: action.payload.currentNotice,
      });
    default:
      return state;
  }
};

export default reducer;
