'use client';
import { ArrowLeft } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { MoreActionType, SidebarSessionList } from '../sidebar-session-list';
import { DeleteChatDialog } from '../detele-chat-dialog';
import { useState } from 'react';
import { RenameChatDialog } from '../rename-chat-dialog';
import { GenerateNewPrivacyKey } from '../generate-new-privacy-key';
import { Button } from '../ui/button';
import { useBoolean } from '@/hooks/use-boolean';

let selectKeys = [
  'Finance Professional',
  'Audit Assurance Specialist',
  'Audit Planner',
  'Auditor',
  'Bank Credit Investigator',
  'Bank Relationship Manager',
  'Chief Financial Officer',
  'Chief Investment Officer',
  'Chief Risk Officer',
  'Credit Analyst',
  'Equity Analyst',
  'Forensic Auditor',
  'Fraud Investigator',
  'Internal Auditor',
  'Portfolio Manager',
  'Regulator',
  'Risk Analyst',
];

export type SessionItemType = {
  id: string;
  title: string;
  time: string;
};
export type SessionList = {
  date: string;
  sessions: SessionItemType[];
};
const _sessionListMock: SessionList[] = [
  {
    date: 'Today',
    sessions: [
      {
        id: '1',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
      {
        id: '2',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
      {
        id: '3',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
      {
        id: '4',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
      {
        id: '5',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
    ],
  },
  {
    date: 'Yesterday',
    sessions: [
      {
        id: 'Yesterday-1',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
      {
        id: 'Yesterday-2',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
      {
        id: 'Yesterday-3',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
      {
        id: 'Yesterday-4',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
      {
        id: 'Yesterday-5',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
    ],
  },
  {
    date: 'Yesterday',
    sessions: [
      {
        id: 'Yesterday-1',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
      {
        id: 'Yesterday-2',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
      {
        id: 'Yesterday-3',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
      {
        id: 'Yesterday-4',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
      {
        id: 'Yesterday-5',
        title: 'New Session',
        time: '2024-12-05 12:05:59',
      },
    ],
  },
];

export function AppSidebar() {
  const privacyKeyDialog = useBoolean();
  const [moreActionDetail, setMoreActionDetail] = useState<{
    type: MoreActionType;
    data: SessionItemType;
  } | null>(null);

  const handleMoreClick = (type: MoreActionType, data: SessionItemType) => {
    setMoreActionDetail({ type, data });
  };

  const handleSaveChangeName = (name: string) => {
    if (moreActionDetail) {
      console.log(moreActionDetail.data.title, '--->', name);
    }
  };
  return (
    <>
      <Sidebar className={cn('box-border	', 'pt-[24px]', 'pb-[12px]', 'bg-[#13151C]', 'h-[100%]')}>
        <SidebarContent className={cn('pl-[4px]', 'h-[100%]')}>
          <SidebarGroup className={cn('h-[100%]')}>
            <div
              className={cn(
                'flex',
                'justify-items-center',
                'gap-1',
                'text-gray-400',
                'text-sm',
                'hover:text-gray-300',
                'font-semibold',
                'mb-[8px]'
              )}
            >
              <ArrowLeft className={cn('h-[20px]')} />
              <span className={cn('underline')}>Dashboard</span>
            </div>

            <SidebarGroupContent className={cn('flex', 'flex-col', 'justify-between', 'h-[100%]')}>
              <div className={cn('overflow-auto', 'h-[73vh]')}>
                {_sessionListMock.map((sessionItem: SessionList, i) => {
                  return (
                    <SidebarSessionList
                      key={i}
                      sessionItem={sessionItem}
                      onMoreClick={handleMoreClick}
                    />
                  );
                })}
              </div>
              <div className={cn('h-[164px]')}>
                <Button className="w-full text-base text-white px-4 py-2 rounded-md bg-[#F68D24] hover:opacity-80 hover:bg-[#F68D24] relative">
                  Start new session
                </Button>

                <Button
                  className="w-full text-base text-white px-4 py-2 rounded-md hover:opacity-80 decline-btn mt-4 border"
                  onClick={privacyKeyDialog.onTrue}
                >
                  New Privacy Key
                </Button>
                <div className="mt-4">
                  <Select>
                    <SelectTrigger className="w-full text-base text-white px-4 py-6 rounded-md hover:opacity-80 decline-btn bg-gray-700 border-transparent">
                      <SelectValue placeholder="Light" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectKeys.map((key) => {
                        return (
                          <SelectItem key={key} value="key">
                            {key}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <DeleteChatDialog
        open={moreActionDetail?.type === 'Delete'}
        sessionName={moreActionDetail?.data?.title || ''}
        onCancel={() => {
          setMoreActionDetail(null);
        }}
        onDelete={() => {
          setMoreActionDetail(null);
        }}
      />
      <RenameChatDialog
        open={moreActionDetail?.type === 'Rename'}
        sessionName={moreActionDetail?.data?.title || ''}
        onCancel={() => {
          setMoreActionDetail(null);
        }}
        onSave={(name: string) => {
          handleSaveChangeName(name);
          setMoreActionDetail(null);
        }}
      />
      <GenerateNewPrivacyKey
        open={privacyKeyDialog.value}
        onCancel={privacyKeyDialog.onFalse}
        onGenerateNewKey={() => {
          privacyKeyDialog.onFalse();
        }}
      />
    </>
  );
}
