'use client';
import { cn } from '@/lib/utils';
import { SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from '../ui/sidebar';
import { FC, useState } from 'react';
import { MoreAction, MoreActionType } from '.';
import { useBoolean } from '@/hooks/use-boolean';
import { SessionItemType, SessionList } from '@/app/models/ui-model';
import { EllipsisVertical } from 'lucide-react';
import React from 'react';
// Menu items.

type SessionItemProp = {
  title: string;
  time: string;
  isSelected?: boolean;
  onMoreClick?: (type: MoreActionType) => void;
  onClick?: () => void;
};
const SessionItem: FC<SessionItemProp> = ({ title, time, isSelected, onMoreClick, onClick }) => {
  const showMoreAction = useBoolean();
  const [open, setOpen] = useState(false);
  React.useEffect(() => {
    if (open === false) {
      showMoreAction.onFalse();
    }
  }, [open]);

  return (
    <>
      <SidebarMenuItem
        className={'hover: bg-transparent'}
        onMouseEnter={() => {
          showMoreAction.onTrue();
        }}
        onMouseLeave={() => {
          open === false && showMoreAction.onFalse();
        }}
      >
        <div
          className={cn(
            'flex justify-between items-center cursor-pointer hover:bg-[#2A2A2B] bg-transparent p-2 text-sm text-white rounded duration-200',
            isSelected && 'bg-[#2A2A2B]',
            open && 'bg-[#2A2A2B]'
          )}
        >
          <div className={'flex flex-col flex-1'} onClick={onClick}>
            <p>{title}</p>
            <p className="text-xs text-gray-400">{time}</p>
          </div>
          <div className={cn('w-5')}>
            {showMoreAction.value && (
              <MoreAction
                onClick={onMoreClick}
                isOpen={open}
                onSetOpen={(stt: boolean) => setOpen(stt)}
              />
            )}
          </div>
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
