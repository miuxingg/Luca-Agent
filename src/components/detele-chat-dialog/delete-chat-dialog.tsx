import { FC } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '../ui/alert-dialog';

type DeleteChatDialogProps = {
  open: boolean;
  sessionName: string;
  onCancel?: () => void;
  onDelete?: () => void;
};
export const DeleteChatDialog: FC<DeleteChatDialogProps> = ({
  open,
  sessionName,
  onCancel,
  onDelete,
}) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="bg-[#1C1D24] text-white border-0 shadow-lg border-gray-600">
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4">Delete chat</AlertDialogTitle>
          <AlertDialogDescription className="text-white text-base">
            This will delete <span className="font-bold">"{sessionName}"</span> and all its content.
          </AlertDialogDescription>
          <AlertDialogDescription className="text-white text-base">
            Are you sure you want to proceed?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-4">
          <AlertDialogCancel
            onClick={onCancel}
            className="bg-transparent border-gray-600 hover:bg-gray-800 hover:text-white"
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onDelete}
            className="bg-[#F68D24] hover:text-white hover:bg-[#F68D24] hover:opacity-80"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
