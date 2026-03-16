import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solo Leveling Fitness - 30 Day Workout Program",
  description: "Transform yourself with our 30-day progressive workout program. Start light, get stronger every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
