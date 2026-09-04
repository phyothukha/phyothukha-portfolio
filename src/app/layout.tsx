import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/style/globals.css";
import { ThemeProvider } from "@/components/Theme-provider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phyo Thu Kha - MERN Stack Developer",
  description:
    "I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done.",
  icons: {
    icon: [{ url: "/favicon.png" }],
  },
  keywords: ["Phyo Thu Kha", "phyothukha", "mern stack developer"],
  openGraph: {
    title: "Phyo Thu Kha - MERN Stack Developer",
    description:
      "I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done.",
    url: "https://phyothukha-porfolio.vercel.app",
    images: [
      {
        // url: "https://phyothukha-porfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphyothukha.f8710533.png&w=1080&q=75",
        url: "https://phyothukha-porfolio.vercel.app/showcase.png",
        width: 800,
        height: 600,
        alt: "Description of the image for screen readers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phyo Thu Kha - MERN Stack Developer",
    description:
      "I help business grow by crafting amazing web experiences. If you’re looking for a developer that likes to get stuff done.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={"dark" ?? "light"}
      style={{ colorScheme: "dark" ?? "light" }}
    >
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
