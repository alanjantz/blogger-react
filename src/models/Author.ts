export interface AuthorModel {
  id: string;
  displayName: string;
  url: string;
  image: ImageModel;
}

export interface ImageModel {
  url: string;
}
