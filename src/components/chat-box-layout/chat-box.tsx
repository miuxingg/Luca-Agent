import { Expand, Minimize, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import { ChatBoxProps } from '@/app/models/ui-model';


export const ChatBox: FC<ChatBoxProps> = ({
  isResponse,
  isLoading,
  isExpanded,
  reaction,
  avatarUri = '',
  avatarFallback = 'AV',
  content,
  onLikeClick,
  onDisLikeClick,
  onExpandClick,
}) => {
  return (
    <div>
      <div
        className={cn('relative flex flex-col p-4 rounded-lg m-4', isResponse && 'bg-[#1C1D24]')}
      >
        {typeof content === 'string' ? null : (
          <div className="absolute z-50 right-4 top-4 cursor-pointer" onClick={onExpandClick}>
            {isExpanded ? <Minimize /> : <Expand />}
          </div>
        )}

        <div className="flex gap-3">
          <div className="relative flex-shrink-0">
            <Avatar className="w-6 h-6">
            <AvatarImage src={avatarUri} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
          </div>

          <div className="flex flex-col text-white flex-1 overflow-x-auto">
            {isLoading ? (
              <Skeleton className="bg-transparent">sending request...</Skeleton>
            ) : (
              <>
                {typeof content === 'string' ? <p>{content}</p> : content}

                {isResponse && (
                  <div className="flex justify-end my-2 mt-4">
                    <Button
                      onClick={onLikeClick}
                      className="w-6	h-6 bg-transparent hover:bg-gray-600 text-white rounded-md p-1 transition-colors duration-200"
                    >
                      <ThumbsUp
                        size={16}
                        strokeWidth={1.5}
                        fill={reaction === 'like' ? 'currentColor' : 'none'}
                      />
                    </Button>
                    <Button
                      onClick={onDisLikeClick}
                      className="w-6	h-6 bg-transparent hover:bg-gray-600 text-white rounded-md p-1 transition-colors duration-200"
                    >
                      <ThumbsDown
                        size={16}
                        strokeWidth={1.5}
                        fill={reaction === 'dislike' ? 'currentColor' : 'none'}
                      />
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
