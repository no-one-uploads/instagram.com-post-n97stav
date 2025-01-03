import type { Metadata } from "next";
import "./globals.css";
import "./media-queries.css";

export const metadata: Metadata = {
  title: "Instagram",
  description: "Create an account or log in to Instagram - Share what you're into with the people who get you.",
};

export default function RootLayout({
  children,
} : Readonly<{
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
