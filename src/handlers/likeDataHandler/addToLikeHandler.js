import addToLikesServices from "../../services/likes/addToLikesServices";

const addToLikeHandler = (video, localtToken) => {
  try {
    const response = addToLikesServices(video, localtToken);
    return response;
  } catch (error) {
    console.log(error.response);
  }
};

export { addToLikeHandler };
