'use client';
import React, { useEffect, useRef, useState } from 'react';
import { ChatBox } from '.';
import { Label } from '../ui/label';
import { FeedbackDialog } from '../feedback-dialog';

import { cn } from '@/lib/utils';
import { ChatBoxProps } from '@/app/models/ui-model';
import { DetailBox } from './detail-box';
import { X } from 'lucide-react';
import { EngageAnIndependent } from '../engage-an-independent';
import { useBoolean } from '@/hooks/use-boolean';

const MOCK: ChatBoxProps[] = [
  {
    id: '1',
    isResponse: true,
    avatarUri: '/luca.svg',
    avatarFallback: 'L',
    content: `Welcome! I'm thrilled you're here. I am Luca, an AI assistant developed by
Transparently.AI, and I specialize in analyzing accounting manipulation risk for
publicly listed companies. I can help you uncover potential red flags and gain a
clearer understanding of a company's financial integrity.`,
    reaction: undefined,
  },
  {
    id: '2',
    isResponse: false,
    avatarUri: '/',
    avatarFallback: 'Y',
    content: `Hello world`,
    reaction: undefined,
  },
  {
    id: '3',
    isResponse: true,
    avatarUri: '/luca.svg',
    avatarFallback: 'L',
    content: (
      <div style={{ width: '100%', height: 'auto' }}>
        <p>Understood here is an example of code: </p>
      </div>
    ),
  },
  {
    id: '4',
    isResponse: false,
    avatarUri: '/luca.svg',
    avatarFallback: 'L',
    content: `Welcome! I'm thrilled you're here. I am Luca, an AI assistant developed by
Transparently.AI, and I specialize in analyzing accounting manipulation risk for
publicly listed companies. I can help you uncover potential red flags and gain a
clearer understanding of a company's financial integrity.`,
    reaction: undefined,
  },

  {
    id: '6',
    isResponse: false,
    avatarUri: '/luca.svg',
    avatarFallback: 'L',
    content: `Welcome! I'm thrilled you're here. I am Luca, an AI assistant developed by
Transparently.AI, and I specialize in analyzing accounting manipulation risk for
publicly listed companies. I can help you uncover potential red flags and gain a
clearer understanding of a company's financial integrity.`,
    reaction: undefined,
  },

  {
    id: '7',
    isResponse: false,
    avatarUri: '/luca.svg',
    avatarFallback: 'L',
    content: `Welcome! I'm thrilled you're here. I am Luca, an AI assistant developed by
Transparently.AI, and I specialize in analyzing accounting manipulation risk for
publicly listed companies. I can help you uncover potential red flags and gain a
clearer understanding of a company's financial integrity.`,
    reaction: undefined,
  },
  {
    id: '5',
    isResponse: true,
    avatarUri: '/',
    avatarFallback: 'Y',
    content: `Oke lala`,
    reaction: undefined,
  },
];

export const ChatBoxLayout = () => {
  const isChangeReaction = useRef<boolean>(false);
  const chatEngageIndependentDialog = useBoolean(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [chatBoxList, setChatBoxList] = useState(MOCK);
  const [chatBoxExpanded, setChatBoxExpanded] = useState<ChatBoxProps | null>(null);
  const [chatEngageIndependent, setChatEngageIndependent] = useState<ChatBoxProps | null>(null);
  const [feedbackData, setFeedbackData] = useState<ChatBoxProps | null>(null);

  const [question, setQuestion] = useState('');
  useEffect(() => {
    if (isChangeReaction.current) {
      isChangeReaction.current = false;
    } else {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
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

  const handleAcceptAnIndependent = () => {
    isChangeReaction.current = true;
    if (chatEngageIndependent) {
      setChatBoxList((p) => {
        return p.map((c) => {
          return c.id === chatEngageIndependent.id ? { ...c, engageIndependentLoadding: true } : c;
        });
      });
      chatEngageIndependentDialog.onFalse();
      setTimeout(() => {
        isChangeReaction.current = true;
        setChatBoxList((p) => {
          return p.map((c, i) => {
            return c.id === chatEngageIndependent.id
              ? {
                  ...c,
                  engageIndependentLoadding: false,
                  engageIndependentBorder: new Date().getTime() % 2 === 0,
                  engageIndependentReasoning: `I recognized the user's question ("are you ai") as a general inquiry about my nature.
                I responded by confirming that I am an AI assistant. To provide context and avoid
                simply stating "yes," I also described my specialization and capabilities. This
                approach aims to be more helpful and informative than a one-word answer. Given that my
                response directly addresses the user's question and aligns with my designed purpose,
                the probability of hallucination is very low, estimated at less than 1%. My answer is
                grounded in factual information about my identity and function.`,
                  engageIndependentAudit:
                    'Another model has audited the response provided for a previous question. The audit involved independently querying the database for relevant information and comparing it to the original response.',
                }
              : c;
          });
        });
        setChatEngageIndependent(null);
      }, 3000);
    }
  };

  const handleSubmit = () => {
    if (question) {
      setChatBoxList((p) => [
        ...p,
        {
          id: new Date().toString(),
          isResponse: false,
          avatarUri: '/',
          avatarFallback: 'Y',
          content: question,
        },
        {
          id: new Date().toString(),
          isResponse: true,
          isLoading: true,
          avatarUri: '/',
          avatarFallback: 'Y',
        },
      ]);
      setQuestion('');
    }
  };
  return (
    <>
      <div className="flex-1 h-full flex flex-col relative bg-black">
        <div className="flex flex-1 flex-col ">
          <div className={cn(!chatBoxExpanded && 'h-[88vh] overflow-y-auto scroll-bottom')}>
            <nav className="sticky top-0 z-10 bg-black w-full p-3 h-16 flex justify-center items-center">
              <div>
                <Label className="text-white text-base">New session</Label>
              </div>
            </nav>

            <div className={cn(chatBoxExpanded && 'flex')}>
              <div
                className={cn('h-full', 'justify-center')}
                style={chatBoxExpanded ? { flex: 1 } : {}}
              >
                <div className={cn('text-sm')}>
                  <div
                    className={cn(
                      'mx-auto lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] ',
                      chatBoxExpanded && 'h-[81vh] !overflow-y-auto !scroll-bottom'
                    )}
                  >
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
                          onEngageIndependentClick={() => {
                            setChatEngageIndependent(chat);
                            chatEngageIndependentDialog.onTrue();
                          }}
                        />
                      );
                    })}
                  </div>
                  <div ref={bottomRef} />
                </div>
              </div>
              {chatBoxExpanded && (
                <div
                  className="justify-center slide-in "
                  style={chatBoxExpanded ? { flex: 1 } : {}}
                >
                  <div className="h-[32px] bg-[#282A36] rounded-t-lg">
                    <div
                      className="absolute right-2 top-2 rounded-sm opacity-70 
                  ring-offset-background transition-opacity hover:opacity-100 
                  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 
                  disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                    >
                      <X
                        className="h-4 w-4 text-white cursor-pointer"
                        onClick={() => setChatBoxExpanded(null)}
                      />
                      <span className="sr-only">Close</span>
                    </div>
                  </div>
                  <div
                    className={cn(
                      'detail-box-wapper-height text-sm ',
                      chatBoxExpanded && '!overflow-y-auto !scroll-bottom'
                    )}
                  >
                    <div className="mx-auto lg:gap-6 md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] ">
                      <DetailBox
                        {...chatBoxExpanded}
                        isExpanded
                        onLikeClick={() => {
                          handleLikeClick(chatBoxExpanded.id);
                        }}
                        onDisLikeClick={() => {
                          setFeedbackData(chatBoxExpanded);
                        }}
                      />
                    </div>
                  </div>
                  <div className="h-[32px] bg-[#282A36] rounded-b-lg"></div>
                </div>
              )}
            </div>
          </div>

          <div className={cn(chatBoxExpanded ? 'w-[50%] my-4 h-16' : 'w-full my-4 h-16')}>
            <div className="md:max-w-3xl lg:max-w-[40rem] xl:max-w-[48rem] mx-auto lg:px-0">
              <div>
                <Label className="sr-only">Your message</Label>
                <div className="flex items-center px-2 py-3 rounded-lg bg-gray-700 lg:mx-3">
                  <textarea
                    value={question}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    className="resize-ta resize-none block mx-4 p-2.5 w-full 
                    text-sm  rounded-lg  bg-gray-700
                     border-gray-600 placeholder-gray-400 text-white
                     focus:ring-blue-500 focus:border-blue-500 outline-none"
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
      <EngageAnIndependent
        open={chatEngageIndependentDialog.value}
        onAccept={handleAcceptAnIndependent}
        onDecline={chatEngageIndependentDialog.onFalse}
      />
    </>
  );
};
