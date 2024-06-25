import type { Metadata } from "next";
import "./css/style.css";

export const metadata: Metadata = {
  title: "React Tooltip Component | Base UI",
  description: "Base UI Docs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
