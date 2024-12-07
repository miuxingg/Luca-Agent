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

type GenerateNewPrivacyKeyProps = {
  open: boolean;
  onCancel?: () => void;
  onGenerateNewKey?: () => void;
};
export const GenerateNewPrivacyKey: FC<GenerateNewPrivacyKeyProps> = ({
  open,
  onCancel,
  onGenerateNewKey,
}) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="bg-[#1C1D24] text-white border-0 shadow-lg border-gray-600">
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-4">Generate New Privacy Key</AlertDialogTitle>
          <AlertDialogDescription className="text-white text-base">
            <span className="font-bold">Warning: </span>You are about to create a new privacy key.
            This action cannot be undone. Creating a new key will permanently disconnect you from
            all your current sessions. You can only recover these sessions if you saved your
            existing privacy key. Without your current key, all previous session history will be
            permanently lost.
          </AlertDialogDescription>

          <AlertDialogDescription className="text-white text-base">
            Do you want to continue and generate a new privacy key?
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
            onClick={onGenerateNewKey}
            className="bg-[#F68D24] hover:text-white hover:bg-[#F68D24] hover:opacity-80"
          >
            Generate New Key
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
