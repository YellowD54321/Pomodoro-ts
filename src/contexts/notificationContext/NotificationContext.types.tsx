import React from 'react';

interface IUser {
  id: string;
  name: string;
}

interface IPost {
  id: string;
  user_id: string;
  end_time: Date;
  description: string;
  focus_seconds: number;
}

export interface INotification {
  id: string;
  sender: IUser;
  receiver: IUser;
  content: string;
  post: IPost;
  isRead: boolean;
  createdAt: Date;
}

export interface IDefaultValue {
  notifications: INotification[] | [];
  setNotifications: React.Dispatch<React.SetStateAction<INotification[]>>;
}
