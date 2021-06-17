// action creator: called by the event-handlers, sent a raw event object and supposed to return a consumable object to be used by the reducer

export const setCurrentUser = (user) => {
  return {
    type: "SET_CURRENT_USER",
    payload: user,
  };
};
