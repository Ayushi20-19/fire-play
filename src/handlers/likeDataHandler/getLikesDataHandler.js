import { getLikesDataService } from "../../services/likes/getLikesDataService";

const getLikesDataHandler = (localToken) => {
  if (localToken) {
    try {
      return getLikesDataService(localToken);
    } catch (error) {
      console.log(error);
    }
  }
};

export { getLikesDataHandler };
