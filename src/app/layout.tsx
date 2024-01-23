import type { Metadata } from "next";
import { GFS_Didot, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/header/Header";
import Footer from "@/components/sections/footer/Footer";
import Wrapper from "@/components/wrapper/Wrapper";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const didot = GFS_Didot({
  subsets: ["greek"],
  weight: ["400"],
  variable: "--font-didot",
});

export const metadata: Metadata = {
  title: "E. Forrest's Porfolio",
  description: "A site showcasing the Emilia Forrest's portfolio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          id='font-css'
          rel='stylesheet'
          href='https://use.typekit.net/utv7pce.css'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
      </head>
      <body className={`${roboto.className} ${didot.variable}`}>
        <div className='z-999 relative'>
          <Header />
        </div>
        <Wrapper>{children}</Wrapper>
        <Footer />
      </body>
    </html>
  );
}
