import dayjs from 'dayjs';
import {
  BottomWrapper,
  Description,
  EmojiButton,
  EmojiButtonArea,
  FinishTime,
  Focus,
  LikeArea,
  PostCardWrapper,
  TitleWrapper,
  UserName,
} from './PostCard.styles';
import { PostCardProps } from './PostCard.types';
import { INTERACTION_EMOJI } from '../../../types';
import { getUserId } from '../../../utils/token/loginToken';
import { useState } from 'react';
import { likePost } from '../../../utils/api/apis';

const EMOJI_MAPPING = {
  [INTERACTION_EMOJI.LIKE]: '👍',
  [INTERACTION_EMOJI.WOW]: '😮',
  [INTERACTION_EMOJI.HEART]: '❤️',
};

const PostCard = ({ post, setPostInteraction }: PostCardProps) => {
  const [isEmojiAreaOpen, setIsEmojiAreaOpen] = useState(false);
  const userId = getUserId();
  const interaction = post.interactions.find(
    (interaction) => interaction.user_id === userId,
  );
  const emoji = interaction?.emoji;

  const onLikeButtonClick = async (emoji: INTERACTION_EMOJI) => {
    setIsEmojiAreaOpen(false);
    setPostInteraction(post.id, emoji);

    try {
      await likePost({
        emoji,
        post_id: post.id,
      });
    } catch (error) {
      // do nothing
    }
  };

  const onDislikeButtonClick = async () => {
    setIsEmojiAreaOpen(false);
    setPostInteraction(post.id, null);

    try {
      await likePost({
        emoji: null,
        post_id: post.id,
      });
    } catch (error) {
      // do nothing
    }
  };

  return (
    <PostCardWrapper>
      <TitleWrapper>
        <UserName>{post.user_id}</UserName>
        <Focus>{`Focused ${post.focus_seconds ? Math.floor(post.focus_seconds / 60) : 0} minutes`}</Focus>
      </TitleWrapper>
      <Description>{post.description}</Description>
      <BottomWrapper>
        <LikeArea>
          {isEmojiAreaOpen && (
            <EmojiButtonArea>
              <EmojiButton
                onClick={() => onLikeButtonClick(INTERACTION_EMOJI.LIKE)}
              >
                👍
              </EmojiButton>
              <EmojiButton
                onClick={() => onLikeButtonClick(INTERACTION_EMOJI.WOW)}
              >
                😮
              </EmojiButton>
              <EmojiButton
                onClick={() => onLikeButtonClick(INTERACTION_EMOJI.HEART)}
              >
                ❤️'
              </EmojiButton>
            </EmojiButtonArea>
          )}
          {!emoji ? (
            <EmojiButton
              onClick={() => setIsEmojiAreaOpen((isOpen) => !isOpen)}
            >
              Like
            </EmojiButton>
          ) : (
            <EmojiButton onClick={onDislikeButtonClick}>
              {EMOJI_MAPPING[emoji]}
            </EmojiButton>
          )}
        </LikeArea>
        <FinishTime>{`🕒${dayjs(post.end_time).format('YYYY-MM-DD HH:mm')}`}</FinishTime>
      </BottomWrapper>
    </PostCardWrapper>
  );
};

export default PostCard;
