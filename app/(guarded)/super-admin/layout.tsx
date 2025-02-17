
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/superAdmin-sidebar"
import Navbar from "../_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div
      className="
        h-full w-screen flex flex-col overflow-hidden ">
      <SidebarProvider>
      <AppSidebar />
      
      <div className="h-full w-full flex bg-white flex-col">
    <Navbar />
      <div className="flex h-full flex-col w-full px-2 sm:px-2 xl:px-6 py-2 sm:py-2 xl:py-8 bg-[#fefefa] overflow-y-scroll select-none">
        {children}
      </div>
        
      </div>
      </SidebarProvider>
    </div>
  );
};

export default ProtectedLayout;
