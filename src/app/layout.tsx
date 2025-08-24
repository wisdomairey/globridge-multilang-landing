import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://globridge.com'),
  title: "Globridge - Connect, Collaborate, Conquer – Anywhere",
  description: "AI-powered productivity tools for remote global teams. Collaborate, translate, and execute flawlessly across time zones, languages, and cultures.",
  keywords: ["AI productivity", "remote teams", "global collaboration", "translation", "team communication"],
  authors: [{ name: "Globridge" }],
  openGraph: {
    title: "Globridge - Work Without Borders",
    description: "AI tools for global teams to collaborate, translate, and execute flawlessly.",
    url: "https://globridge.com",
    siteName: "Globridge",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Globridge - Global Team Collaboration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Globridge - Work Without Borders",
    description: "AI tools for global teams to collaborate, translate, and execute flawlessly.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
