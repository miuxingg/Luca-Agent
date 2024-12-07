'use client';

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
import { _sessionListMock, CATEGORIES } from '@/app/constants/luca-constants';
import { SessionItemType, SessionList } from '@/app/models/ui-model';

export function AppSidebar() {
  const privacyKeyDialog = useBoolean();
  const [selected, setSelected] = useState('1');
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
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className={cn('underline')}>Dashboard</span>
              </button>
            </div>
          </div>
        </div>
        <SidebarContent className={cn('pl-0', 'h-[100%]', 'mt-[2px]')}>
          <SidebarGroup className={cn('h-[100%]')}>
            <SidebarGroupContent className={cn('flex', 'flex-col', 'justify-between', 'h-[100%]')}>
              <div className={cn('overflow-auto', 'h-[73vh]')}>
                {_sessionListMock.map((sessionItem: SessionList, i) => {
                  return (
                    <SidebarSessionList
                      key={i}
                      sessionItem={sessionItem}
                      onMoreClick={handleMoreClick}
                      onClick={(id: string) => {
                        setSelected(id);
                      }}
                      idSelected={selected}
                    />
                  );
                })}
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <div className={cn('h-[194px]', 'p-4', 'flex', 'flex-col', 'justify-between', 'gap-3')}>
          <Button className="h-[40px] w-full text-base text-white px-4 py-2 rounded-md bg-[#F68D24] hover:opacity-80 hover:bg-[#F68D24] relative">
            Start new session
          </Button>

          <Button
            className="w-full text-base	 px-4 py-2 rounded-md hover:opacity-80 decline-btn h-[42px]"
            onClick={privacyKeyDialog.onTrue}
          >
            New Privacy Key
          </Button>
          <Select defaultValue={CATEGORIES?.[0].value}>
            <SelectTrigger className="w-full h-[48px] text-base text-white rounded-md hover:opacity-80 decline-btn bg-gray-700 !border-0">
              <SelectValue className="text-white bg-white" />
            </SelectTrigger>
            <SelectContent className="border-0 bg-white text-black border-gray-300">
              {CATEGORIES.map((obj) => {
                return (
                  <SelectItem
                    key={obj.value}
                    value={obj.value}
                    title={obj.title}
                    className="truncate"
                  >
                    {obj.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
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
