import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "나만의 홈페이지",
  description: "Gaeul's Hompages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

// export const Layout = ({ children }) => {
//   return <div className="Layout">{children}</div>;
// };
