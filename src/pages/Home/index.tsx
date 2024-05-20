import React, { useCallback, useEffect, useState } from "react";
import { postAPI } from "../../api/post";
import { handleEndpointCallApiDex } from "../../utils/EndpointUtils";
import { PostModel } from "../../models/Post";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<PostModel[]>([]);

  const getPosts = useCallback(async (): Promise<void> => {
    const allPosts = await handleEndpointCallApiDex(() => postAPI.getPosts());
    setPosts(allPosts.data?.items ?? []);
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <p key={post.id}>
          <h3>{post.title}</h3>
          <article dangerouslySetInnerHTML={{ __html: post.content }} />
        </p>
      ))}
    </div>
  );
};

export default Home;
