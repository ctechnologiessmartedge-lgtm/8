import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full overflow-x-hidden">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
