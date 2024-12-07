export type SessionItemType = {
  id: string;
  title: string;
  time: string;
};

export type SessionList = {
  date: string;
  sessions: SessionItemType[];
};

export type ChatBoxProps = {
  id: string;
  isResponse?: boolean;
  isLoading?: boolean;
  isExpanded?: boolean;
  reaction?: 'like' | 'dislike';
  avatarUri?: string;
  avatarFallback?: string;
  content?: string | React.ReactNode;
  onLikeClick?: () => void;
  onDisLikeClick?: () => void;
  onExpandClick?: () => void;
};