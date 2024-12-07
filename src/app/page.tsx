import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/privacy');

  return null;
}
