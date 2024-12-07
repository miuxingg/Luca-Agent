import { FC } from 'react';

type Props = {
  expandFunc?: () => void;
};

export const CodeButton: FC<Props> = ({ expandFunc }) => {
  return (
    <button
      onClick={expandFunc}
      className="my-2 border border-white bg-white 
        hover:border-reds flex flex-1 items-stretch rounded-lg text-left 
        transition-all hover:drop-shadow-sm active:scale-[0.9875]"
      aria-label="Preview contents"
    >
      <div
        className="bg-white flex items-center 
        justify-center rounded-lg w-14 bg-bg-200  border-r-[0.5px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 256 256"
        >
          <path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>
        </svg>
      </div>
      <div className="padding min-w-0 flex-1 px-4 py-3">
        <div className="break-words text-sm font-medium leading-tight">
          Next.js Finance App with Shadcn/UI
        </div>
        <div className="text-text-400 line-clamp-1 text-xs min-h-4">Click to open code</div>
      </div>
    </button>
  );
};
