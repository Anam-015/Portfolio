import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anam Nayab | Personal Portfolio',
  description: 'First year engineering student juggling to balance between love for literature and tech. Skills in HTML, CSS, Python, and SQL.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="leaf-pattern-bg min-h-screen text-[#f3e8ff] antialiased selection:bg-[#d8b4fe] selection:text-[#1a0b36]">
        {children}
      </body>
    </html>
  );
}
