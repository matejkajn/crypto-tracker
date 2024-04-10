import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Props = {
  children: ReactNode;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main className="w-[85%] m-auto">{children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
