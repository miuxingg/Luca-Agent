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

type EngageAnIndependentProps = {
  open: boolean;
  onDecline?: () => void;
  onAccept?: () => void;
};
export const EngageAnIndependent: FC<EngageAnIndependentProps> = ({
  open,
  onDecline,
  onAccept,
}) => {
  return (
    <AlertDialog open={open} onOpenChange={onDecline}>
      <AlertDialogContent className="max-w-[480px] bg-[#262C38] text-white border-0 !rounded-[12px] shadow-lg p-4">
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-2">
            [ATTENTION] Request to initiate response audit.
          </AlertDialogTitle>
          <AlertDialogDescription className="text-white text-sm mx-1">
            This procedure will engage an independent model to evaluate the reasoning and validate
            the outcomes. Please be advised that while this process may require several minutes to
            complete, Luca will remain available for use during this time. Do you wish to continue?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-6 mb-2 mx-1">
          <AlertDialogCancel
            onClick={onDecline}
            className="bg-transparent border-gray-600 hover:bg-gray-800 hover:text-white"
          >
            Decline
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onAccept}
            className="bg-[#F68D24] hover:text-white hover:bg-[#F68D24] hover:opacity-80"
          >
            Accept
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
