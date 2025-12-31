import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranav Kanchi | Portfolio IDE",
  description: "Interactive IDE-style portfolio for Pranav Kanchi - Investment Banking Analyst at Goldman Sachs with expertise in infrastructure software, M&A, and full-stack development.",
  keywords: "Pranav Kanchi, Investment Banking, Goldman Sachs, Software Development, Portfolio, IDE, M&A, Technology",
  authors: [{ name: "Pranav Kanchi" }],
  openGraph: {
    title: "Pranav Kanchi | Portfolio IDE",
    description: "Explore my portfolio as an interactive code editor",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
