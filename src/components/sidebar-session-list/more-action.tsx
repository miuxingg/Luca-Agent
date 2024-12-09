import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { EllipsisVertical, Pencil, RotateCw, Trash2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

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
  onSetOpen: (bool: boolean) => void;
  isOpen: boolean;
};
export function MoreAction({ onClick, onSetOpen, isOpen }: MoreActionProps) {
  const menubarRef = useRef(null);

  const handleOutsideClick = (event: MouseEvent) => {
    const items = document.getElementsByClassName('item-of-menu');
    if (menubarRef.current && !(menubarRef.current as any).contains(event.target)) {
      items.length === 0 && onSetOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <Menubar className="bg-transparent border-0 focus:bg-transparent p-0" ref={menubarRef}>
      <MenubarMenu>
        <MenubarTrigger className="p-0 cursor-pointer" onClick={() => onSetOpen(!isOpen)}>
          <EllipsisVertical size={16} strokeWidth={1.5} />
        </MenubarTrigger>
        <MenubarContent className="!w-[170px] bg-[#1C1D24] text-white shadow-lg border-gray-600 rounded-2xl	p-2">
          {items.map((item) => {
            return (
              <MenubarItem
                key={item.type}
                className="flex gap-3 py-3 hover:bg-gray-800 cursor-pointer item-of-menu"
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.(item.type);
                  onSetOpen(false);
                }}
              >
                {item.icon}
                {item.label}
              </MenubarItem>
            );
          })}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
