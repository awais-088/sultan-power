import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://sultan-power.vercel.app",
  ),

  title: {
    default: "Sultan Brothers Power Engineering",
    template: "%s | Sultan Brothers Power Engineering",
  },

  description:
    "Sultan Brothers Power Engineering provides new generator sales, diesel engine overhauling, generator repair, servicing and power engineering solutions.",

  applicationName: "Sultan Brothers Power Engineering",

  openGraph: {
    title: "Sultan Brothers Power Engineering",
    description:
      "Generator sales, complete engine repair and professional power engineering solutions.",
    siteName: "Sultan Brothers Power Engineering",
    locale: "en_PK",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
