import { removeFromLikesService } from "../../services/likes/removeFromLikesServices";

const removeFromLikesHandler = async (_id, localToken) => {
  try {
    const response = await removeFromLikesService(_id, localToken);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export { removeFromLikesHandler };
