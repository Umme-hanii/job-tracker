import { Navbar } from "@/components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar></Navbar>
      <div>{children}</div>
    </>
  );
};

export default layout;
