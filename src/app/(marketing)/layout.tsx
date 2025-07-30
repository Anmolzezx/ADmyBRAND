import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";


const IBMPlex = IBM_Plex_Sans({
    subsets: ["latin"],
    variable: "--font-ibm-plex",
    weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "ADmyBRAND",
  description: "ADmyBRAND AI Suite",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("font-IBMPlex antialiased bg-background text-foreground", IBMPlex.variable)}
      >
        {children}
      </body>
    </html>
  );
}