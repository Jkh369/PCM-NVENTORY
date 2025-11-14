import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCM Inventory",
  description: "Asset inventory management system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
