import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const siteUrl = "https://muqaddas-portfolio-zeta.vercel.app";
const title = "Muqaddas Malik | Full Stack Developer Portfolio";
const description =
  "Muqaddas Malik, also known as Muqaddas12 and muqaddasmalik, is a full stack developer building React, Next.js, Node.js, Firebase, mobile, and admin products.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Muqaddas Malik Portfolio",
  authors: [{ name: "Muqaddas Malik", url: siteUrl }],
  creator: "Muqaddas Malik",
  publisher: "Muqaddas Malik",
  keywords: [
    "Muqaddas Malik",
    "Muqaddas",
    "muqaddasmalik",
    "Muqaddas12",
    "Muqaddas portfolio",
    "Full Stack Developer India",
    "React developer",
    "Next.js developer",
    "Node.js developer",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title,
    description,
    siteName: "Muqaddas Malik Portfolio",
    images: [
      {
        url: "/Muqaddas%20Malik.jpg",
        width: 1200,
        height: 1500,
        alt: "Muqaddas Malik full stack developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/Muqaddas%20Malik.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muqaddas Malik",
  alternateName: ["Muqaddas", "muqaddasmalik", "Muqaddas12"],
  url: siteUrl,
  image: `${siteUrl}/Muqaddas%20Malik.jpg`,
  jobTitle: "Full Stack Developer",
  email: "mailto:muqaddasmalik781@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Meerut",
    addressCountry: "IN",
  },
  sameAs: [
    "https://github.com/Muqaddas12",
    "https://www.linkedin.com/in/muqaddas-malik-a65048229",
    "https://muqaddas-portfolio-zeta.vercel.app",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Firebase",
    "JavaScript",
    "TypeScript",
    "React Native",
    "Kotlin",
    "Cybersecurity",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
