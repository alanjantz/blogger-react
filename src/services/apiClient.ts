import { getApiKey, getBlogId } from "../utils/EnvironmentVariablesUtils";

const API = {
  KEY: getApiKey(),
  BASE_URL: "https://www.googleapis.com/blogger/v3/blogs",
  BLOG_ID: getBlogId(),
};

export { API };
