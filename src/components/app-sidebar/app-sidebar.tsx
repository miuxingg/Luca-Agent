import { Calendar, Home, Inbox, Search, Settings, ArrowLeft } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { SidebarSessionList } from '../sidebar-session-list';

export function AppSidebar() {
  return (
    <Sidebar
      className={cn(
        'w-[290px]',
        'box-border	',
        'pt-[24px]',
        'pb-[12px]',
        'bg-[#13151C]',
        'h-[100%]'
      )}
    >
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
            <ArrowLeft className={cn('h-full', 'h-[20px]')} />
            <span className={cn('underline')}>Dashboard</span>
          </div>

          <SidebarGroupContent className={cn('flex', 'flex-col', 'justify-between', 'h-[100%]')}>
            <div className={cn('overflow-auto', 'max-h-[700px]')}>
              <SidebarSessionList />
              <SidebarSessionList />
              <SidebarSessionList />
            </div>
            <div className={cn('h-[164px]')}>
              <button className="w-full text-base text-white px-4 py-2 rounded-md bg-[#F68D24] hover:opacity-80 relative">
                Start new session
              </button>

              <button className="w-full text-base text-white px-4 py-2 rounded-md hover:opacity-80 decline-btn mt-4 border">
                New Privacy Key
              </button>
              <div className="mt-4">
                <Select>
                  <SelectTrigger className="w-full text-base text-white px-4 py-6 rounded-md hover:opacity-80 decline-btn bg-gray-700 border-transparent">
                    <SelectValue placeholder="Light" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
