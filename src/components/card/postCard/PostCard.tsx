import dayjs from 'dayjs';
import {
  BottomWrapper,
  Description,
  EmojiButton,
  EmojiButtonArea,
  EmojiButtonsWindow,
  LikedEmojisArea,
  FinishTime,
  Focus,
  LikeArea,
  PostCardWrapper,
  TitleWrapper,
  UserName,
  LikedEmoji,
  LikedEmojiText,
  LikedEmojisWindow,
} from './PostCard.styles';
import { PostCardProps } from './PostCard.types';
import { INTERACTION_EMOJI } from '../../../types';
import { getUserId, isLogin } from '../../../utils/token/loginToken';
import { useState } from 'react';
import { likePost } from '../../../utils/api/apis';
import { useNavigate } from 'react-router-dom';
import { LIKED_USERS_DISPLAY_AMOUNT, PATH } from '../../../constants';

const EMOJI_MAPPING = {
  [INTERACTION_EMOJI.LIKE]: '👍',
  [INTERACTION_EMOJI.WOW]: '😮',
  [INTERACTION_EMOJI.HEART]: '❤️',
};

const PostCard = ({ post, setPostInteraction }: PostCardProps) => {
  const navigate = useNavigate();
  const [isEmojiAreaOpen, setIsEmojiAreaOpen] = useState(false);
  const userId = getUserId();
  const interaction = post.interactions.find(
    (interaction) => interaction.user_id === userId,
  );
  const emoji = interaction?.emoji;

  const onLikeButtonClick = async (emoji: INTERACTION_EMOJI) => {
    if (!isLogin()) {
      return navigate(PATH.LOGIN);
    }

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

  const likedUsersText = post.interactions
    .map((interaction) => interaction.user_id.slice(0, 5))
    .slice(0, LIKED_USERS_DISPLAY_AMOUNT)
    .join(', ');
  const likedText = `${likedUsersText} like this post!`;

  return (
    <PostCardWrapper>
      <TitleWrapper>
        <UserName>{post.user_id}</UserName>
        <Focus>{`Focused ${post.focus_seconds ? Math.floor(post.focus_seconds / 60) : 0} minutes`}</Focus>
      </TitleWrapper>
      <Description>{post.description}</Description>
      <BottomWrapper>
        <LikeArea>
          {Array.isArray(post.interactions) && (
            <LikedEmojisArea>
              <LikedEmojiText>{likedText}</LikedEmojiText>
              <LikedEmojisWindow>
                {post.interactions
                  .filter((interaction) => !!interaction)
                  .slice(0, LIKED_USERS_DISPLAY_AMOUNT)
                  .map((interaction, index) => {
                    if (!interaction.emoji) return null;

                    return (
                      <LikedEmoji key={interaction.user_id} $index={index}>
                        {EMOJI_MAPPING[interaction.emoji]}
                      </LikedEmoji>
                    );
                  })}
              </LikedEmojisWindow>
            </LikedEmojisArea>
          )}
          <EmojiButtonArea>
            {isEmojiAreaOpen && (
              <EmojiButtonsWindow>
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
              </EmojiButtonsWindow>
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
          </EmojiButtonArea>
        </LikeArea>
        <FinishTime>{`🕒${dayjs(post.end_time).format('YYYY-MM-DD HH:mm')}`}</FinishTime>
      </BottomWrapper>
    </PostCardWrapper>
  );
};

export default PostCard;
