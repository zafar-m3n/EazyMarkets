import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-background text-text font-figtree">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* <WhatsAppButton /> */}
    </div>
  );
}
