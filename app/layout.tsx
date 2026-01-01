import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Team Sensus - Elite CS2 Esports Team",
  description: "Team Sensus is an elite Counter-Strike 2 esports team pushing the boundaries of tactical gameplay and competitive excellence.",
  keywords: ["CS2", "Counter-Strike 2", "esports", "gaming", "Team Sensus"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
