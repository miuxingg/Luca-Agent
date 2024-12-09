'use client';
import { cn } from '@/lib/utils';
import { SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from '../ui/sidebar';
import { FC, useState } from 'react';
import { MoreAction, MoreActionType } from '.';
import { SessionItemType, SessionList } from '@/app/models/ui-model';
// Menu items.

type SessionItemProp = {
  title: string;
  time: string;
  isSelected?: boolean;
  onMoreClick?: (type: MoreActionType) => void;
  onClick?: () => void;
};
const SessionItem: FC<SessionItemProp> = ({ title, time, isSelected, onMoreClick, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <>
      <SidebarMenuItem
        className={'hover: bg-transparent'}
        onClick={onClick}
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        <div
          className={cn(
            'flex justify-between items-center cursor-pointer hover:bg-[#2A2A2B] bg-transparent p-2 text-sm text-white rounded duration-200',
            isSelected && 'bg-[#2A2A2B]'
          )}
        >
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
  idSelected: string;
  onMoreClick?: (type: MoreActionType, data: SessionItemType) => void;
  onClick?: (id: string) => void;
};
export const SidebarSessionList: FC<SidebarSessionListProps> = ({
  onMoreClick,
  onClick,
  sessionItem,
  idSelected,
}) => {
  return (
    <div>
      <SidebarGroupLabel
        className={cn(
          'flex justify-items-center text-white	text-sm font-semibold p-2 pl-0 px-4 mt-2'
        )}
      >
        {sessionItem.date}
      </SidebarGroupLabel>
      <SidebarMenu className="px-4 gap-0 mt-1">
        {sessionItem.sessions.map((item) => (
          <SessionItem
            key={item.id}
            title={item.title}
            time={item.time}
            isSelected={idSelected === item.id}
            onMoreClick={(type: MoreActionType) => {
              onMoreClick?.(type, item);
            }}
            onClick={() => onClick?.(item.id)}
          />
        ))}
      </SidebarMenu>
    </div>
  );
};
