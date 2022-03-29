import { removeFromHistoryService } from "../../services/history";

const removeFromHistoryHandler = async (_id) => {
  const localToken = localStorage.getItem("token");
  if (localToken) {
    return removeFromHistoryService(_id, localToken);
  }
};

export { removeFromHistoryHandler };
