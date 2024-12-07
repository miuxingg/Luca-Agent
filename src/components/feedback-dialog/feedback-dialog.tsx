import { FC } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Textarea } from '../ui/textarea';
import { Checkbox } from '../ui/checkbox';

const checkList = [
  {
    id: '1',
    label: 'Not factually correct.',
  },
  {
    id: '2',
    label: 'Did what I asked, but response was inaccuarate.',
  },
  {
    id: '3',
    label: 'Offensive / inappropriate.',
  },
];

type FeedbackDialogProps = {
  open: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
};
export const FeedbackDialog: FC<FeedbackDialogProps> = ({ open, onCancel, onSubmit }) => {
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        onCancel?.();
      }}
    >
      <DialogContent className="bg-[#1C1D24] text-white border-0 shadow-lg border-gray-600">
        <DialogHeader>
          <DialogTitle>Thanks for your feedback!</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-white text-sm mt-5">
          We're sorry to hear that. Please share your feedback with us.
        </DialogDescription>
        <Textarea
          id="feedback"
          rows={10}
          placeholder="Please share your feedback with us"
          className=" text-white bg-gray-700"
          onChange={(e) => {}}
        />
        {checkList.map((checkItem) => {
          return (
            <div className="flex items-center space-x-2" key={checkItem.id}>
              <Checkbox
                id={checkItem.id}
                className="bg-white peer data-[state=checked]:bg-blue-500 mr-1"
              />
              <label
                htmlFor={checkItem.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {checkItem.label}
              </label>
            </div>
          );
        })}

        <DialogDescription className="text-white text-xs text-gray-400 italic mt-2">
          This data will be used to improve our services. Data may be reviewed by humans. Please do
          not share data that is personal, sensitive or confidential.
        </DialogDescription>

        <DialogFooter className="mt-6">
          <Button
            onClick={onCancel}
            className="bg-transparent border-gray-600 hover:bg-gray-800 hover:text-white"
          >
            Cancel
          </Button>
          <Button
            onClick={() => onSubmit?.()}
            className="bg-[#F68D24] hover:text-white hover:bg-[#F68D24] hover:opacity-80"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
