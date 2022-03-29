import { getVideosService } from "../../services/videosData/getVideosService";

const getVideosData = async () => {
  try {
    const response = await getVideosService();
    return response;
  } catch (error) {
    console.log(error);
  }
};
export { getVideosData };
