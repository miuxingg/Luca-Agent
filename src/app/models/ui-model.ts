export type SessionItemType = {
  id: string;
  title: string;
  time: string;
};
export type SessionList = {
  date: string;
  sessions: SessionItemType[];
};
