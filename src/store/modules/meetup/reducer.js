import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/CREATE_MEETUP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@meetup/CREATE_MEETUP_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@meetup/MEETUP_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
