import { AppSidebar } from '@/components/app-sidebar/app-sidebar';
import { Sidebar, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        asdasd
      </main>
    </SidebarProvider>
  );
}
