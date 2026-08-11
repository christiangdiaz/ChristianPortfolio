import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Christian Diaz — Software Engineer",
  description:
    "Christian Diaz is a UMass Amherst computer science student working across embedded systems, automation, computer vision, and full-stack development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LNF4L2LCWV"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LNF4L2LCWV');
          `}
        </Script>
      </body>
    </html>
  );
}
