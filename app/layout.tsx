import Header from "@/components/Header";
import { CustomThemeProvider } from "@/theme";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Bebas_Neue, Public_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--display-font",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--body-font",
});

export const metadata: Metadata = {
  title: "Shejan Mahamud | Full Stack Developer (Backend Focused)",
  description:
    "Portfolio of Shejan Mahamud – a Full Stack Developer specializing in backend development using Node.js, NestJS, PostgreSQL, and AWS. Expert in building scalable APIs and cloud-ready applications with TypeScript, Prisma, and React.",
  keywords: [
    "Full Stack Developer",
    "Backend Developer",
    "Node.js Developer",
    "NestJS Developer",
    "PostgreSQL Developer",
    "Prisma ORM",
    "TypeScript Developer",
    "JavaScript Developer",
    "React Developer",
    "Next.js Developer",
    "AWS Developer",
    "BullMQ",
    "Mongoose",
    "Shejan Mahamud Portfolio",
    "Web Developer Bangladesh",
  ],
  authors: [{ name: "Shejan Mahamud", url: "https://portfolio.shejan.me" }],
  creator: "Shejan Mahamud",
  metadataBase: new URL("https://portfolio.shejan.me"),
  openGraph: {
    title: "Shejan Mahamud | Full Stack Developer",
    description:
      "Scalable, cloud-ready web apps built using TypeScript, Node.js, NestJS, PostgreSQL, Prisma, and AWS. View the portfolio of Shejan Mahamud.",
    url: "https://portfolio.shejan.me",
    siteName: "Shejan Mahamud Portfolio",
    type: "website",
    images: [
      {
        url: "https://portfolio.shejan.me/og-image.jpg", // Replace with your OG image path
        width: 1200,
        height: 630,
        alt: "Shejan Mahamud Full Stack Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shejan Mahamud | Full Stack Developer (Backend Focused)",
    description:
      "Explore Shejan Mahamud's developer portfolio – expert in Node.js, NestJS, PostgreSQL, and React. Building modern, cloud-ready applications.",
    creator: "@me_shejan", // optional: replace with your Twitter
    images: ["https://portfolio.shejan.me/og-image.jpg"], // Replace with your OG image
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
      className={`${publicSans.variable} ${bebasNeue.variable}`}
      suppressHydrationWarning
    >
      <body>
        <CustomThemeProvider>
          <div className="bg-[var(--foreground)] text-[var(--text)] relative">
            <Header />
            {children}
            <Analytics />
          </div>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
