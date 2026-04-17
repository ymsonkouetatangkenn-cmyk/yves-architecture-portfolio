import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yves Merlin Sonkoue Tatang | Architecte BIM Portfolio",
  description:
    "Portfolio de Yves Merlin Sonkoue Tatang, architecte BIM Modeler spécialisé en conception architecturale.",
  keywords: [
    "Yves Merlin Sonkoue Tatang",
    "architecte",
    "portfolio architecture",
    "BIM",
  ],
  verification: {
    google: "FppGrWw5gRAP9Kw9wF-JtsA99DoDQ4iouMUHvKOpFEQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
