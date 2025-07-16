import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import SideNavIndicator from "./_components/SideNavIndicator";
// import Footer from "./_components/Footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-spartan",
});

export const metadata: Metadata = {
  title: {
    template: "%s / ArchStudio",
    default: "ArchStudio",
  },
  description:
    "This is a landing page for a fictional architectural company called Arch Studio. It is built with Next.js and Typescript",
  icons: {
    icon: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.variable} antialiased`}>
        <div>
          <Header />
          <main className="mx-auto overflow-hidden font-spartan">
            {children}
          </main>
          {/* <Footer /> */}
          <SideNavIndicator />
        </div>
      </body>
    </html>
  );
}
