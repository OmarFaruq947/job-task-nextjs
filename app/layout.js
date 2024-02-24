import './globals.css';

export const metadata = {
  title: 'MAAC',
  description: 'job-task',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
