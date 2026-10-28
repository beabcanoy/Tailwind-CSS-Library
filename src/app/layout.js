import "./globals.css";

export const metadata = {
  title: "Tailwind CSS Library",
  description: "A collection of reusable Tailwind CSS components and utilities for building modern web applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
