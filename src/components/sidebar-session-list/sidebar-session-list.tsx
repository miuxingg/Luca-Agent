'use client';
import { cn } from '@/lib/utils';
import { SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from '../ui/sidebar';
import { FC, useState } from 'react';
import { MoreAction, MoreActionType } from '.';
import { SessionItemType, SessionList } from '../app-sidebar';
// Menu items.

type SessionItemProp = {
  title: string;
  time: string;
  onMoreClick?: (type: MoreActionType) => void;
};
const SessionItem: FC<SessionItemProp> = ({ title, time, onMoreClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <SidebarMenuItem
        className={'hover: bg-transparent px-[8px]'}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <div className="flex justify-between items-center cursor-pointer hover:bg-[#2A2A2B] bg-[#2A2A2B] p-2 text-sm text-white rounded shadow-lg duration-200">
          <div className={'flex flex-col '}>
            <p>{title}</p>
            <p className="text-xs text-gray-400">{time}</p>
          </div>
          {hover && (
            <div>
              <MoreAction onClick={onMoreClick} />
            </div>
          )}
        </div>
      </SidebarMenuItem>
    </>
  );
};

type SidebarSessionListProps = {
  sessionItem: SessionList;
  onMoreClick?: (type: MoreActionType, data: SessionItemType) => void;
};
export const SidebarSessionList: FC<SidebarSessionListProps> = ({ onMoreClick, sessionItem }) => {
  return (
    <div>
      <SidebarGroupLabel
        className={cn('flex justify-items-center gap-1 text-white	text-sm font-semibold')}
      >
        {sessionItem.date}
      </SidebarGroupLabel>
      <SidebarMenu>
        {sessionItem.sessions.map((item) => (
          <SessionItem
            key={item.id}
            title={item.title}
            time={item.time}
            onMoreClick={(type: MoreActionType) => {
              onMoreClick?.(type, item);
            }}
          />
        ))}
      </SidebarMenu>
    </div>
  );
};
