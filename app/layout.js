import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "MetaQ - Grow & Scale Your Brand",
  description: "Shopify, Meta Ads & WhatsApp Automation Experts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
 {/* hello */}
      <body className="bg-white text-gray-900 transition-colors duration-300 font-sans">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
