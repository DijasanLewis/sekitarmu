import "./globals.css";
import Link from "next/link";

export default function RootLayout({  children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href="/listumkm">List UMKM</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
