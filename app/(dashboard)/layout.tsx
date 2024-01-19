import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="grid lg:grid-cols-5">
      {/* first-column hide on small screen */}
      <div className="hidden lg:block lg:col-span-1 lg:min-h-screen">
        <Sidebar />
      </div>
      {/* second-col hide dropdown on big screen */}
      <div className="lg:col-span-4">
        <Navbar />
        <div className="h-screen py-16 px-4 sm:px-8 lg:px-16">{children}</div>
      </div>
    </main>
  );
};

export default layout;
