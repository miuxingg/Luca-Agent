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
    id: new Date().toString(),
    isResponse: true,
    avatarUri: 'https://github.com/shadcn.png',
    avatarFallback: 'VN',
    content: `Welcome! I'm thrilled you're here. I am Luca, an AI assistant developed by
Transparently.AI, and I specialize in analyzing accounting manipulation risk for
publicly listed companies. I can help you uncover potential red flags and gain a
clearer understanding of a company's financial integrity.`,
    reaction: 'like',
  },
  {
    id: new Date().toString(),
    isResponse: false,
    avatarUri: 'https://github.com/shadcn.png',
    avatarFallback: 'VN',
    content: `Hello world`,
    reaction: 'like',
  },
  {
    id: new Date().toString(),
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
    id: new Date().toString(),
    isResponse: false,
    avatarUri: 'https://github.com/shadcn.png',
    avatarFallback: 'VN',
    content: `Welcome! I'm thrilled you're here. I am Luca, an AI assistant developed by
Transparently.AI, and I specialize in analyzing accounting manipulation risk for
publicly listed companies. I can help you uncover potential red flags and gain a
clearer understanding of a company's financial integrity.`,
    reaction: 'like',
  },
  {
    id: new Date().toString(),
    isResponse: true,
    avatarUri: 'https://github.com/shadcn.png',
    avatarFallback: 'VN',
    content: `Oke lala`,
    reaction: 'dislike',
  },
];
export const ChatBoxLayout = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const feedbackDialog = useBoolean();
  const [chatBoxList, setChatBoxList] = useState(chatBoxListMock);
  const [chatBoxExpanded, setChatBoxExpanded] = useState<ChatBoxProps | null>(null);
  const [question, setQuestion] = useState('');

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatBoxList]);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (question) {
      console.log(question);
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
              <Label className="text-white text-lg">New session</Label>
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
                          console.log('like');
                        }}
                        onDisLikeClick={() => {
                          feedbackDialog.onTrue();
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
                        console.log('like');
                      }}
                      onDisLikeClick={() => {
                        feedbackDialog.onTrue();
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
                <div className="flex items-center px-2 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 lg:mx-3">
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
        open={feedbackDialog.value}
        onCancel={feedbackDialog.onFalse}
        onSubmit={feedbackDialog.onFalse}
      />
    </>
  );
};
