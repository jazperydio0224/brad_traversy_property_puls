import React from "react";

// navbar
import Navbar from "@/components/Navbar";

// footer
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property Pulse",
  keywords: "rental, property, real estate",
  description: "Find local rental properties",
};

// global css
import "@/assets/styles/globals.css";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
