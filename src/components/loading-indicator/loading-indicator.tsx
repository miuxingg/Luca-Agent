import Image from 'next/image';

export const LoadingIndicator = () => {
  return (
    <div
      id="loading-spinner"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <Image src="/loading.svg" alt="My Icon" width={100} height={100} />
    </div>
  );
};
