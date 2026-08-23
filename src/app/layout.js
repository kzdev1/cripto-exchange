import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar.jsx";
import Ticker from "../components/Ticker.jsx";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata = {
  title: "CryptoCompare",
  description: "Compare criptomoedas em tempo real",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${plexMono.variable} antialiased`}>
        <Navbar />
        <Ticker />
        {children}
      </body>
    </html>
  );
}


