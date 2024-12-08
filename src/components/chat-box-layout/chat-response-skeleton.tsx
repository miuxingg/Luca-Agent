'use client'
import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';

function simulateDataStream(callback: any, delay = 1000) {
  const dataChunks = [
    { id: 1, status: 'loading', message: 'Sending request...' },
    { id: 2, status: 'processing', message: 'Thinking...' },
    { id: 3, status: 'processing', message: 'Thinking...' },
    { id: 4, status: 'processing', message: 'Preparing output...' },
  ];

  let index = 0;

  const intervalId = setInterval(() => {
    if (index < dataChunks.length) {
      callback(dataChunks[index]);
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, delay);

  return intervalId;
}

export const ResponseSkeleton = () => {
  const [message, setMessage] = useState('Sending request...');
  const handleStreamedData = (data: any) => {
    setMessage(data.message);
  };

  useEffect(() => {
    simulateDataStream(handleStreamedData);
  }, []);

  return <Skeleton className="bg-transparent">{message}</Skeleton>;
};
