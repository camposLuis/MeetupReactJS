export function detailMeetupRequest(idMeetup) {
  return {
    type: '@detail/DETAIL_MEETUP_REQUEST',
    payload: { idMeetup },
  };
}

export function detailMeetupSuccess(meetup) {
  return {
    type: '@detail/DETAIL_MEETUP_SUCCESS',
    payload: { meetup },
  };
}
export function detailMeetupFailure() {
  return {
    type: '@detail/DETAIL_MEETUP_FAILURE',
  };
}
