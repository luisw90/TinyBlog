import axios from "axios";

export const getPosts = async () => {
  const request = await axios.get("https://dummyjson.com/posts");
  return request.data.posts;
};
