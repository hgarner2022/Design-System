import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Petrona } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const petrona = Petrona({
  variable: "--font-petrona",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design System",
  description: "A fully themed design system with Next.js and Storybook",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${petrona.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
