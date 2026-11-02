import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  metadataBase: new URL("https://sultan-power.vercel.app"),

  title: {
    default:
      "Generator Sales & Diesel Engine Repair | Sultan Brothers Power Engineering",
    template: "%s | Sultan Brothers Power Engineering",
  },

  description:
    "Looking for diesel generators or generator repair? Sultan Brothers Power Engineering offers generator sales, diesel engine repair, complete overhauling, maintenance and spare parts for Cummins, Perkins, Isuzu and Yangdong generators.",

  applicationName: "Sultan Brothers Power Engineering",
  category: "Industrial Generator Sales and Power Engineering",

  keywords: [
    "generator sales",
    "diesel generator sales",
    "new diesel generators",
    "industrial generators",
    "generator repair",
    "diesel generator repair",
    "generator maintenance",
    "diesel engine repair",
    "diesel engine overhauling",
    "complete engine overhauling",
    "generator spare parts",
    "diesel generator spare parts",
    "Cummins generator",
    "Perkins generator",
    "Isuzu generator",
    "Yangdong generator",
    "power engineering services",
    "generator repairing services",
    "Sultan Brothers Power Engineering",
  ],

  authors: [
    {
      name: "Sultan Brothers Power Engineering",
    },
  ],

  creator: "Sultan Brothers Power Engineering",
  publisher: "Sultan Brothers Power Engineering",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Sultan Brothers Power Engineering | Generator Sales & Repair",
    description:
      "Generator sales, diesel engine repair, complete overhauling, maintenance and spare parts support.",
    url: "https://sultan-power.vercel.app",
    siteName: "Sultan Brothers Power Engineering",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/generator-hero.webp",
        width: 1600,
        height: 1200,
        alt: "Industrial diesel generator at Sultan Brothers Power Engineering",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sultan Brothers Power Engineering | Generator Sales & Repair",
    description:
      "Diesel generator sales, repairs, engine overhauling and maintenance.",
    images: ["/images/generator-hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Add your real Google Search Console verification value here later.
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: "/apple-icon.png",
  },
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sultan Brothers Power Engineering",
  url: "https://sultan-power.vercel.app",
  image: "https://sultan-power.vercel.app/images/generator-hero.jpg",
  telephone: "+923010002987",
  description:
    "Generator sales, diesel generator repair, complete diesel engine overhauling, maintenance and generator spare parts.",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.966625,
    longitude: 71.0653971,
  },
  areaServed: {
    "@type": "Place",
    name: "Pakistan",
  },
  knowsAbout: [
    "Diesel generator sales",
    "Diesel generator repair",
    "Diesel engine overhauling",
    "Generator maintenance",
    "Generator spare parts",
    "Cummins generators",
    "Perkins generators",
    "Isuzu generators",
    "Yangdong generators",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
      </body>
    </html>
  );
}
