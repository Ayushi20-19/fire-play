import axios from "axios";

const addToLikesServices = async (video, localtToken) => {
  return await axios.post(
    "/api/user/likes",
    { video },
    { headers: { authorization: localtToken } }
  );
};

export default addToLikesServices;
