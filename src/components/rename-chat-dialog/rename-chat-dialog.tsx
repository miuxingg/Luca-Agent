import { FC, useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

type RenameChatDialogProps = {
  open: boolean;
  sessionName: string;
  onCancel?: () => void;
  onSave?: (name: string) => void;
};
export const RenameChatDialog: FC<RenameChatDialogProps> = ({
  open,
  sessionName,
  onCancel,
  onSave,
}) => {
  const [name, setName] = useState(sessionName);
  useEffect(() => {
    setName(sessionName);
  }, [sessionName]);
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        onCancel?.();
      }}
    >
      <DialogContent className="bg-[#1C1D24] text-white border-0 shadow-lg border-gray-600">
        <DialogHeader>
          <DialogTitle>Rename chat</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input
            id="name"
            value={name}
            className="bg-gray-700 text-white"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <DialogFooter>
          <Button
            onClick={onCancel}
            className="bg-transparent border-gray-600 hover:bg-gray-800 hover:text-white"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onSave?.(name)}
            className="bg-[#F68D24] hover:text-white hover:bg-[#F68D24] hover:opacity-80"
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
