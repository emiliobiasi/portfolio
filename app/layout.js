import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "emiliobiasi シ",
  description: "Emilio Biasi's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="bg-slate-950 js-focus-visible"
      data-js-focus-visible=""
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto">
          <div className="leading-relaxed text-slate-200 antialiased selection:bg-teal-300 selection:text-teal-900">
            <div className="z-[-10] fixed inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#034a4391,transparent)]"></div>
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
