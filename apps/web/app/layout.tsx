import './global.css';
import { Toaster } from "../../../shared/src/components/ui/toaster";

export const metadata = {
  title: 'Welcome to web',
  description: 'Generated by create-nx-workspace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Toaster />
    </html>
  );
}
