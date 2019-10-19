import produce from 'immer';

const INITIAL_STATE = {
  meetupDetail: null,
};

export default function detail(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@detail/DETAIL_MEETUP_SUCCESS': {
        draft.meetupDetail = action.payload.meetup;
        break;
      }
      default:
    }
  });
}
