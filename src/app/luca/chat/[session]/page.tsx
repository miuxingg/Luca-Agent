'use client'
import { AppSidebar } from '@/components/app-sidebar/app-sidebar';
import { ChatBoxLayout } from '@/components/chat-box-layout';
import { LoadingIndicator } from '@/components/loading-indicator';
import { SidebarProvider } from '@/components/ui/sidebar';
import { useEffect, useState } from 'react';

export default function LucaChatBox() {
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  },[])
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-1">
        <ChatBoxLayout />
        {isLoading && <LoadingIndicator/>}
      </main>
    </SidebarProvider>
  );
}
