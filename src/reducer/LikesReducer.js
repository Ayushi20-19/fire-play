export const LikesReducer = (likesState, { type, payload }) => {
  switch (type) {
    case "ADD_TO_LIKES":
      return { ...likesState, likes: payload };
    case "GET_LIKES_DATA":
      return { ...likesState, likes: payload };
    case "REMOVE_FROM_LIKES":
      return { ...likesState, likes: payload };
  }
};
