import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { EllipsisVertical, Pencil, RotateCw, Trash2 } from 'lucide-react';

export type MoreActionType = 'Rename' | 'Regenerate' | 'Delete';
type MoreActionItemType = {
  label: string;
  icon: React.ReactElement;
  type: MoreActionType;
};
const items: MoreActionItemType[] = [
  {
    label: 'Rename',
    icon: <Pencil size={16} strokeWidth={1.5} />,
    type: 'Rename',
  },
  {
    label: 'Regenerate title',
    icon: <RotateCw size={16} strokeWidth={1.5} />,
    type: 'Regenerate',
  },
  {
    label: 'Delete',
    icon: <Trash2 size={16} strokeWidth={1.5} />,
    type: 'Delete',
  },
];

type MoreActionProps = {
  onClick?: (type: MoreActionType) => void;
};
export function MoreAction({ onClick }: MoreActionProps) {
  return (
    <Menubar className="bg-transparent border-0 focus:bg-transparent p-0">
      <MenubarMenu>
        <MenubarTrigger className="p-0 cursor-pointer">
          <EllipsisVertical size={16} strokeWidth={1.5} />
        </MenubarTrigger>
        <MenubarContent className="bg-[#1C1D24] text-white border-0 shadow-lg border-gray-600 p-3">
          {items.map((item) => {
            return (
              <MenubarItem
                key={item.type}
                className="flex gap-3 py-3 hover:bg-gray-800"
                onClick={() => {
                  onClick?.(item.type);
                }}
              >
                {item.icon}
                <p>{item.label}</p>
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
