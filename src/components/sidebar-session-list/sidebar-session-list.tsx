import { cn } from '@/lib/utils';
import { SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from '../ui/sidebar';
// Menu items.
const items = [
  {
    title: 'New Session',
  },
  {
    title: 'New Session',
  },
  {
    title: 'New Session',
  },
  {
    title: 'New Session',
  },
  {
    title: 'New Session',
  },
];

export const SidebarSessionList = () => {
  return (
    <div>
      <SidebarGroupLabel
        className={cn(
          'flex',
          'justify-items-center',
          'gap-1',
          'text-white	',
          'text-sm',
          'font-semibold'
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
  );
};
