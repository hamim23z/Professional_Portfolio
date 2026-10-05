import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "./data/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const description =
  "Hamim Choudhury is a software engineer and CS senior at The City College of New York. Explore his experience, projects, and tech stack.";

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: "Hamim Choudhury | Software Engineer",
  description,
  openGraph: {
    title: "Hamim Choudhury | Software Engineer",
    description,
    url: profile.siteUrl,
    siteName: "Hamim Choudhury",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0a0c0f",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
