'use client';
// import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';
import { ChatBox, ChatBoxProps } from '.';
import { Label } from '../ui/label';
import { FeedbackDialog } from '../feedback-dialog';
import { useBoolean } from '@/hooks/use-boolean';
import Image from 'next/image';
import demo_img from '../../app/assets/images/IMG_4728.png';
import { cn } from '@/lib/utils';

const chatBoxListMock: ChatBoxProps[] = [
  {
    id: '1',
    isResponse: true,
    avatarUri: 'https://github.com/shadcn.png',
    avatarFallback: 'VN',
    content: `Welcome! I'm thrilled you're here. I am Luca, an AI assistant developed by
Transparently.AI, and I specialize in analyzing accounting manipulation risk for
publicly listed companies. I can help you uncover potential red flags and gain a
clearer understanding of a company's financial integrity.`,
    reaction: undefined,
  },
  {
    id: '2',
    isResponse: false,
    avatarUri: 'https://github.com/shadcn.png',
    avatarFallback: 'VN',
    content: `Hello world`,
    reaction: undefined,
  },
  {
    id: '3',
    isResponse: true,
    avatarUri: 'https://github.com/shadcn.png',
    avatarFallback: 'VN',
    content: (
      <Image
        src={demo_img}
        alt={'asd'}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    ),
  },
  {
    id: '4',
    isResponse: false,
    avatarUri: 'https://github.com/shadcn.png',
    avatarFallback: 'VN',
    content: `Welcome! I'm thrilled you're here. I am Luca, an AI assistant developed by
Transparently.AI, and I specialize in analyzing accounting manipulation risk for
publicly listed companies. I can help you uncover potential red flags and gain a
clearer understanding of a company's financial integrity.`,
    reaction: undefined,
  },
  {
    id: '5',
    isResponse: true,
    avatarUri: 'https://github.com/shadcn.png',
    avatarFallback: 'VN',
    content: `Oke lala`,
    reaction: undefined,
  },
];
export const ChatBoxLayout = () => {
  const isChangeReaction = useRef<boolean>(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [chatBoxList, setChatBoxList] = useState(chatBoxListMock);
  const [chatBoxExpanded, setChatBoxExpanded] = useState<ChatBoxProps | null>(null);
  const [feedbackData, setFeedbackData] = useState<ChatBoxProps | null>(null);

  const [question, setQuestion] = useState('');
  useEffect(() => {
    if (isChangeReaction.current) {
      isChangeReaction.current = false;
    } else {
      setTimeout(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }, [chatBoxList]);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleLikeClick = (id: string) => {
    isChangeReaction.current = true;
    setChatBoxList((p) => {
      return p.map((c) => {
        return c.id === id ? { ...c, reaction: 'like' } : c;
      });
    });
    if (chatBoxExpanded && chatBoxExpanded.id === id) {
      setChatBoxExpanded((p) => {
        if (!p) return p;
        return { ...p, reaction: 'like' };
      });
    }
  };

  const handleDisLikeClick = () => {
    isChangeReaction.current = true;
    if (feedbackData) {
      setChatBoxList((p) => {
        return p.map((c) => {
          return c.id === feedbackData.id ? { ...c, reaction: 'dislike' } : c;
        });
      });
      if (chatBoxExpanded && chatBoxExpanded.id === feedbackData.id) {
        setChatBoxExpanded((p) => {
          if (!p) return p;
          return { ...p, reaction: 'dislike' };
        });
      }
      setFeedbackData(null);
    }
  };

  const handleSubmit = () => {
    if (question) {
      setChatBoxList((p) => [
        ...p,
        {
          id: new Date().toString(),
          isResponse: false,
          avatarUri: 'https://github.com/shadcn.png',
          avatarFallback: 'VN',
          content: question,
        },
        {
          id: new Date().toString(),
          isResponse: true,
          isLoading: true,
          avatarUri: 'https://github.com/shadcn.png',
          avatarFallback: 'VN',
        },
      ]);
      setQuestion('');
    }
  };
  return (
    <>
      <div className="flex-1 h-full flex flex-col relative bg-black">
        <div className="flex flex-1 flex-col ">
          <nav className="sticky top-0 z-10 bg-black w-full p-3 h-16 flex justify-center items-center">
            <div>
              <Label className="text-white text-base">New session 111</Label>
            </div>
          </nav>
          <div className={cn(chatBoxExpanded && 'flex')}>
            <div className="justify-center">
              <div className="h-[81vh] text-sm overflow-y-auto scroll-bottom custom-scrollbar">
                <div className="mx-auto lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] ">
                  {chatBoxList.map((chat, i) => {
                    return (
                      <ChatBox
                        key={i}
                        {...chat}
                        onLikeClick={() => {
                          handleLikeClick(chat.id);
                        }}
                        onDisLikeClick={() => {
                          setFeedbackData(chat);
                        }}
                        onExpandClick={() => {
                          setChatBoxExpanded(chat);
                        }}
                      />
                    );
                  })}
                </div>
                <div ref={bottomRef} />
              </div>
            </div>
            {chatBoxExpanded && (
              <div className="justify-center">
                <div className="h-[81vh] text-sm overflow-y-auto scroll-bottom custom-scrollbar">
                  <div className="mx-auto lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] ">
                    <ChatBox
                      {...chatBoxExpanded}
                      isExpanded
                      onLikeClick={() => {
                        handleLikeClick(chatBoxExpanded.id);
                      }}
                      onDisLikeClick={() => {
                        setFeedbackData(chatBoxExpanded);
                      }}
                      onExpandClick={() => {
                        setChatBoxExpanded(null);
                      }}
                    />
                  </div>
                  <div ref={bottomRef} />
                </div>
              </div>
            )}
          </div>

          <div className="w-full my-4">
            <div className="md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] mx-auto py-4 px-4 lg:px-0">
              <div>
                <Label className="sr-only">Your message</Label>
                <div className="flex items-center px-2 py-3 rounded-lg bg-gray-50 bg-gray-700 lg:mx-3">
                  <textarea
                    value={question}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    className="resize-ta resize-none block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                    placeholder="Your message..."
                    onChange={(e) => {
                      setQuestion(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeedbackDialog
        open={!!feedbackData}
        onCancel={() => {
          setFeedbackData(null);
        }}
        onSubmit={handleDisLikeClick}
      />
    </>
  );
};
