import React from "react";

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
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
