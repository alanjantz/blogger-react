export const getApiKey = (): string => {
  return process.env.REACT_APP_API_KEY ?? "";
};

export const getBlogId = (): string => {
  return process.env.REACT_APP_BLOG_ID ?? "";
};
