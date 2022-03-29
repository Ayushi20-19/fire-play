import { removeFromLikesHandler } from "../handlers/likeDataHandler/removeFromLikes";

const dislike = async (_id, likesDispatch) => {
  const localToken = localStorage.getItem("token");
  if (localToken) {
    const response = await removeFromLikesHandler(_id, localToken);

    if (response.status === 200) {
      likesDispatch({
        type: "REMOVE_FROM_LIKES",
        payload: response.data.likes,
      });
    } else {
      console.log("error");
    }
  }
};

export { dislike };
