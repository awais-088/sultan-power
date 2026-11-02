import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: {
    default: "Sultan Brothers Power Engineering",
    template: "%s | Sultan Brothers Power Engineering",
  },
  description:
    "Sultan Brothers Power Engineering offers new generators, generator sales, complete generator repair, engine overhauling and power engineering services.",
  applicationName: "Sultan Brothers Power Engineering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
