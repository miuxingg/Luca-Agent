import { ThumbsDown, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { FC } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import { ChatBoxProps } from '@/app/models/ui-model';
import { CodeButton } from '../code-button';
import { Label } from '../ui/label';

export const ChatBox: FC<ChatBoxProps> = ({
  isResponse,
  isLoading,
  isExpanded,
  reaction,
  avatarUri = '',
  avatarFallback = 'AV',
  content,
  engageIndependentLoadding,
  engageIndependentBorder = true,
  engageIndependentReasoning,
  engageIndependentAudit,
  onLikeClick,
  onDisLikeClick,
  onExpandClick,
  onEngageIndependentClick,
}) => {
  return (
    <div>
      <div
        className={cn(
          'relative flex flex-col p-4 rounded-lg m-4 first:mt-0',
          isResponse ? 'bg-[#1C1D24]' : 'bg-slate-800'
        )}
      >
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

                {typeof content === 'string' ? null : (
                  <div className="text-black" onClick={onExpandClick}>
                    <CodeButton expandFunc={onExpandClick} />
                  </div>
                )}

                {isResponse && (
                  <div className="flex justify-end my-2 mt-4">
                    <Button
                      className="w-6 h-6 bg-transparent hover:bg-gray-600 text-white border-0 shadow-none rounded-md p-1 transition-colors duration-200"
                      onClick={onEngageIndependentClick}
                    >
                      {engageIndependentLoadding ? (
                        <svg
                          id="audit-spinner-icon-l-1"
                          className="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          id="audit-icon-l-1"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          style={{ marginTop: 2 }}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          ></path>
                        </svg>
                      )}
                    </Button>
                    <Button
                      onClick={onLikeClick}
                      className="w-6	h-6 bg-transparent hover:bg-gray-600 text-white border-0 shadow-none rounded-md p-1 transition-colors duration-200"
                    >
                      <ThumbsUp
                        size={16}
                        strokeWidth={1.5}
                        fill={reaction === 'like' ? 'currentColor' : 'none'}
                      />
                    </Button>
                    <Button
                      onClick={onDisLikeClick}
                      className="w-6	h-6 bg-transparent hover:bg-gray-600 text-white border-0 shadow-none rounded-md p-1 transition-colors duration-200"
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
        {isResponse && (engageIndependentReasoning || engageIndependentAudit) && (
          <div className={cn(' text-white', engageIndependentBorder && 'pass-audit')}>
            {engageIndependentReasoning && (
              <>
                <h1 className="text-white text-lg font-bold">Reasoning</h1>
                <p className={cn(engageIndependentBorder && 'text-[12.8px]')}>
                  {engageIndependentReasoning}
                </p>
              </>
            )}
            {engageIndependentAudit && (
              <>
                <h1 className="text-white text-lg font-bold mt-4">Audit</h1>
                <p className={cn(engageIndependentBorder && 'text-[12.8px]')}>
                  {engageIndependentAudit}
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
