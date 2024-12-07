'use client';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { CATEGORIES } from '../constants/luca-constants';

const maskedPrivacyKey = '9c9923aab58d9999';

const randomPrivacyKey = '3dd892d4' + new Date().getTime().toString();

export default function Privacy() {
  const { push } = useRouter();

  return (
    <div className="h-full w-full text-white flex justify-center items-center">
      <div className="flex justify-center items-center h-full w-[35rem] mx-auto">
        <div className="w-full bg-[#13151B] p-5 rounded-lg">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl pb-0">Privacy Key</h1>
            <span className="inline-block mt-4">
              This unique key ensures your sessions remain completely anonymous. While you can
              generate a new key at any time, please note this will reset all your existing
              sessions.
            </span>
            <p className="mt-4">
              <span className="font-bold">IMPORTANT:</span> This key will be displayed{' '}
              <span className="font-bold">ONLY ONCE</span> and cannot be recovered. We don't store
              your privacy key on our servers for maximum security, which means we cannot show it to
              you again after this moment. Make sure to copy and save your key in a secure location
              – you'll need it to access your sessions when using a new browser, after clearing
              cookies, or when switching to a different device.
            </p>
            <p className="mt-4">
              Think of it as your personal key to unlock your session history across all your
              devices. Without it, you won't be able to access your previous sessions. Remember to
              copy it now and keep it safe!
            </p>
          </div>

          <div className="flex flex-col w-full mt-4">
            <form className="w-full flex gap-2">
              <input
                type="password"
                name="privacy_key"
                placeholder="Enter your privacy key"
                className="bg-gray-700 border-gray-600 text-white rounded-md px-4 py-2 flex-1"
              />
              <button
                type="submit"
                className="bg-primary-color text-white rounded-md px-4 py-2 hover:opacity-80"
              >
                Submit
              </button>
            </form>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="px-4 py-2 rounded-md hover:opacity-80 decline-btn mt-4"
                  id="new-session-btn"
                >
                  Go with random privacy key
                </button>
              </DialogTrigger>
              <VisuallyHidden.Root>
                <DialogTitle>Menu</DialogTitle>
              </VisuallyHidden.Root>
              <DialogContent
                className=" sm:w-[35rem] modal border-transparent"
                style={{ top: '40%', padding: '0rem' }}
              >
                <div className="relative w-full max-w-2xl max-h-full text-white">
                  <div>
                    <div className="flex items-center justify-between pt-4 px-4">
                      <h2 className="w-full text-center text-2xl font-semibold text-gray-900 text-white pb-0">
                        Enhanced Privacy Protection
                      </h2>
                    </div>
                    <div className="p-4 md:p-4 space-y-4">
                      <p>
                        Your privacy key is a unique code that adds an extra layer of security to
                        protect your privacy. By using this key all your conversations with our AI
                        remain completely private and untraceable.
                        <span className="font-bold"> Keep your key secure and protected.</span>
                      </p>

                      <div className="flex items-center bg-gray-700 rounded-md p-2">
                        <div className="flex items-center shadow-sm flex-1">
                          <span id="privacy-key" className="text-white p-3 rounded-md">
                            ${maskedPrivacyKey}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <button
                            id="copy-button"
                            className="ml-2 p-2 bg-gray-600 rounded-md hover:bg-gray-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p>
                          Choose a persona that best matches your professional role, selecting the
                          closest match to your position if you don't see an exact fit. This helps
                          tailor responses to your specific needs and context. The AI assistant will
                          adapt its language, examples, and level of technical detail to be most
                          relevant for your position. You can change your selected persona at any
                          time later.
                        </p>
                        <div className="relative mt-2">
                          <div className="absolute inset-y-0 right-2 flex items-center px-2 pointer-events-none">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </div>
                          <select
                            id="select-role"
                            className="w-full p-3 bg-gray-700 text-white rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-color"
                          >
                            {CATEGORIES.map((persona) => {
                              if (persona.value === 'general') {
                                return (
                                  <option defaultValue={'general'} key={persona.value} value={persona.value} title={persona.title}>
                                    {persona.name}
                                  </option>
                                );
                              }
                              return (
                                <option key={persona.value} value={persona.value} title={persona.title}>
                                  {persona.name}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-4 pb-4 md:p-4 rounded-b justify-end text-sm">
                      <button
                        id="action-no"
                        type="button"
                        className="px-4 py-2 rounded-md hover:opacity-80 decline-btn"
                      >
                        Decline
                      </button>
                      <button
                        type="button"
                        className="ml-2 px-4 py-2 bg-primary-color rounded-md hover:opacity-80"
                        onClick={() => {
                          push(`luca/chat/${randomPrivacyKey}`);
                        }}
                      >
                        Accept
                      </button>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
