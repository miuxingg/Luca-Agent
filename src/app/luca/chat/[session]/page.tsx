import { AppSidebar } from '@/components/app-sidebar/app-sidebar';
import { ChatBoxLayout } from '@/components/chat-box-layout';
import { SidebarProvider } from '@/components/ui/sidebar';

export default function LucaChatBox() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex flex-1">
        <ChatBoxLayout />
      </main>
    </SidebarProvider>
  );
}
