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
      <Sidebar className={cn('box-border	', 'bg-[#13151C]', 'h-[100%]')}>
        <div className="flex flex-col px-4 pt-4">
          <div className="flex flex-row justify-between">
            <div className="text-sm flex items-center justify-end mt-2">
              <button
                id="back-button"
                className="text-gray-400 py-2 hover:text-gray-300 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className={cn('underline')}>Dashboard</span>
              </button>
            </div>
          </div>
        </div>
        <SidebarContent className={cn('pl-[4px]', 'h-[100%]')}>
          <SidebarGroup className={cn('h-[100%]')}>
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
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <div className={cn('p-4', 'flex', 'flex-col', 'justify-between')}>
          <Button className="h-[40px] w-full text-base text-white px-4 py-2 rounded-md bg-[#F68D24] hover:opacity-80 hover:bg-[#F68D24] relative">
            Start new session
          </Button>

          <Button
            className="w-full px-4 py-2 rounded-md hover:opacity-80 decline-btn  h-[42px]"
            onClick={privacyKeyDialog.onTrue}
          >
            New Privacy Key
          </Button>
          <div>
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
