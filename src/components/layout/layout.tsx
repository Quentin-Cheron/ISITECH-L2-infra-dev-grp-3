// Custom layout component

import Header from "../Header";
import Footer from "../Footer";

// types
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
