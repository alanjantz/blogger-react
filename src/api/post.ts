import Axios, { AxiosResponse } from "axios";
import {
  PostModel,
  PostResponseModel as PostsResponseModel,
} from "../models/Post";
import { API } from "../services/apiClient";

export const postAPI = {
  getPosts: (): Promise<AxiosResponse<PostsResponseModel>> =>
    Axios.get(`${API.BASE_URL}/${API.BLOG_ID}/posts?key=${API.KEY}`),
  getPost: (postId: string): Promise<AxiosResponse<PostModel>> =>
    Axios.get(`${API.BASE_URL}/${API.BLOG_ID}/posts/${postId}?key=${API.KEY}`),
};
