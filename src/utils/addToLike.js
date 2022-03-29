import { addToLikeHandler } from "../handlers/likeDataHandler/addToLikeHandler";

const addToLike = async (_id, likesDispatch, dataState) => {
  const localToken = localStorage.getItem("token");
  if (localToken) {
    const video = dataState.videos.find((item) => item._id === _id);
    const response = await addToLikeHandler(video, localToken);

    if (response.status === 201) {
      likesDispatch({ type: "ADD_TO_LIKES", payload: response.data.likes });
    } else {
      console.log("err");
    }
  }
};

export { addToLike };
