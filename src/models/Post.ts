import { AuthorModel } from "./Author";

export interface PostResponseModel {
  items: PostModel[];
}

export interface PostModel {
  id: string;
  published: Date;
  updated: Date;
  title: string;
  content: string;
  author: AuthorModel;
  labels: string[];
}
