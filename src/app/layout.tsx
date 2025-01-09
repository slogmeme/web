import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const goodSans = localFont({
  src: '../assets/fonts/GoodSans-Regular.woff2',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "SLOG",
  description: "3D AI Blockchain Cricket.",
};

    export default function RootLayout({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
      return (
        <html lang="en">
          <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-E1YW5274VY"></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-E1YW5274VY');
              `,
            }} />
            <script dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '366194547064903'); 
                fbq('track', 'PageView');
              `,
            }} />
          </Head>
          <body
            className={`${geistSans.variable} ${geistMono.variable} ${goodSans.className} antialiased`}
          >
            {children}
          </body>
    </html>
  );
}
