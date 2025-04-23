export const metadata = {
    title: 'My App',
    description: 'Barebones Next.js App',
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    );
  }