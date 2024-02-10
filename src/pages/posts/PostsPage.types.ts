import { INTERACTION_EMOJI } from '../../types';

export interface IPostInteraction {
  user_id: string;
  post_id: string;
  emoji: INTERACTION_EMOJI | null;
}

export interface IPost {
  id: string;
  user_id: string;
  end_time: Date;
  description: string;
  focus_seconds: number;
  interactions: IPostInteraction[];
}
