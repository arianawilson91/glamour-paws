import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Glamour Paws | Premium Pet Grooming, Daycare & Boarding in Cape Coral & Fort Myers",
  description:
    "Glamour Paws offers upscale pet grooming, cage-free daycare, and overnight boarding in Cape Coral and Fort Myers, FL. Paws down ~ the best in town!",
  keywords: [
    "pet grooming cape coral",
    "dog grooming fort myers",
    "doggy daycare cape coral",
    "pet boarding southwest florida",
    "cat grooming cape coral",
    "glamour paws",
  ],
  openGraph: {
    title: "Glamour Paws | Premium Pet Grooming in Southwest Florida",
    description:
      "Upscale pet grooming, cage-free daycare, and overnight boarding. Two locations in Cape Coral & Fort Myers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
