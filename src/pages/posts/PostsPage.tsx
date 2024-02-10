import { useEffect, useState } from 'react';
import { IPost } from './PostsPage.types';
import PostCard from '../../components/card/postCard/PostCard';
import { getPosts } from '../../utils/api/apis';
import { StyledPostsPage } from './PostsPage.styles';
import { INTERACTION_EMOJI } from '../../types';
import { getUserId } from '../../utils/token/loginToken';

const PostsPage = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { posts: postsFromApi } = await getPosts();
      setPosts(postsFromApi);
    };

    fetchData();
  }, []);

  const setPostInteraction = (
    postId: string,
    emoji: INTERACTION_EMOJI | null,
  ) => {
    const userId = getUserId();

    if (!userId) return;

    setPosts((posts) => {
      const postIndex = posts.findIndex((post) => post.id === postId);
      const interactionIndex = posts[postIndex]?.interactions.findIndex(
        (interaction) => interaction.user_id === userId,
      );

      if (interactionIndex === -1) {
        posts[postIndex].interactions.push({
          emoji,
          post_id: postId,
          user_id: userId,
        });
      } else {
        posts[postIndex].interactions[interactionIndex].emoji = emoji;
      }

      const newPosts = [...posts];

      return newPosts;
    });
  };

  return (
    <StyledPostsPage>
      {posts.map((post) => {
        return (
          <PostCard
            key={post.id}
            post={post}
            setPostInteraction={setPostInteraction}
          />
        );
      })}
    </StyledPostsPage>
  );
};

export default PostsPage;
