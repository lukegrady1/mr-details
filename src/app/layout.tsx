import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/content";

/* Display + body type system (DESIGN.md §3) */
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} — Mobile Auto Detailing | South Shore, MA`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Mr. Details brings professional mobile auto detailing to your home or business across the South Shore of Massachusetts. We come to you — book your detail today.",
  openGraph: {
    title: `${BUSINESS.name} — Mobile Auto Detailing`,
    description:
      "We come to you. Professional interior & exterior detailing across the South Shore, MA.",
    type: "website",
  },
  metadataBase: new URL("https://mrdetails617.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white">
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
