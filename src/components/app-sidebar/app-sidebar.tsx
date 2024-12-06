import { Calendar, Home, Inbox, Search, Settings, ArrowLeft } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

// Menu items.
const items = [
  {
    title: 'New Session',
    url: '#',
    icon: Home,
  },
  {
    title: 'New Session',
    url: '#',
    icon: Inbox,
  },
  {
    title: 'New Session',
    url: '#',
    icon: Calendar,
  },
  {
    title: 'New Session',
    url: '#',
    icon: Search,
  },
  {
    title: 'New Session',
    url: '#',
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className={cn('w-[290px]', 'box-border	', 'pt-[24px]', 'bg-[#13151C]', 'h-[100%]')}>
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
              'font-semibold'
            )}
          >
            <ArrowLeft className={cn('h-full', 'h-[20px]')} />
            <span className={cn('underline')}>Dashboard</span>
          </div>

          <SidebarGroupContent className={cn('flex', 'flex-col', 'justify-between', 'h-[100%]')}>
            <div className={cn('overflow-auto')}>
              <div>
                <SidebarGroupLabel
                  className={cn(
                    'flex',
                    'justify-items-center',
                    'gap-1',
                    'text-white	',
                    'text-sm',
                    'font-semibold',
                    'mt-[8px]'
                  )}
                >
                  Today
                </SidebarGroupLabel>
                <SidebarMenu>
                  {items.map((item, i) => (
                    <SidebarMenuItem key={i} className={cn('hover: bg-transparent', 'px-[8px]')}>
                      <div
                        className={cn(
                          'flex',
                          'flex-col',
                          'cursor-pointer',
                          'hover:bg-[#2A2A2B]',
                          'bg-[#2A2A2B]',
                          'p-2',
                          'text-sm',
                          'text-white',
                          'rounded',
                          'shadow-lg',
                          'duration-200'
                        )}
                      >
                        <p>{item.title}</p>
                        <p className="text-xs text-gray-400">2024-12-05 12:05:59</p>
                      </div>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </div>
            </div>
            <div className={cn('h-fit')}>
              <button className="w-full text-base text-white px-4 py-2 rounded-md bg-[#F68D24] hover:opacity-80 relative">
                Start new session
              </button>

              <button className="w-full text-base text-white px-4 py-2 rounded-md hover:opacity-80 decline-btn mt-4 border">
                New Privacy Key
              </button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
