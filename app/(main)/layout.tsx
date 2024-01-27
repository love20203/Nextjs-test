"use client";

import Link from "next/link";
import Image from "next/image";


import '@/app/globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return(
    <html lang="en">
      <body>
        <div className="flex-1">
          {children}
        </div>
      </body>
    </html>
  )
}
