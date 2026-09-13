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
  title: {
    default: "Muqaddas Malik | Full Stack Developer & Android Engineer Portfolio",
    template: "%s | Muqaddas Malik",
  },
  description:
    "Official portfolio of Muqaddas Malik (Muqaddas12) — Full Stack Developer & Android Engineer. Creator of SugResults, DropLink, True Scan, Malik Electronic, Physio, and SMM World.",
  applicationName: "Muqaddas Malik Portfolio",
  authors: [{ name: "Muqaddas Malik", url: siteUrl }],
  creator: "Muqaddas Malik",
  publisher: "Muqaddas Malik",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/fav.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/fav.svg" }],
  },
  keywords: [
    "Muqaddas Malik",
    "Muqaddas",
    "muqaddasmalik",
    "Muqaddas12",
    "Muqaddas portfolio",
    "Full Stack Developer India",
    "Android developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    // App-specific keywords for Google discoverability
    "SugResults",
    "SugResults app",
    "SugResults Android",
    "SugResults Play Store",
    "SugResults Uptodown",
    "DropLink",
    "DropLink app",
    "DropLink Android",
    "DropLink Play Store",
    "DropLink Uptodown",
    "TureScan",
    "TureScan app",
    "TureScan document scanner",
    "TureScan Play Store",
    "TureScan Uptodown",
    "True Scan",
    "True Scan app",
    "Physio website",
    "Physio clinic website",
    "SMM World",
    "SMM World website",
    "SMM panel",
    "QR Code Scanner app",
    "QR Code Scanner Android",
    "QR Code Scanner Uptodown",
    "Malik Electronic",
    "Malik Electronic app",
    "Malik Electronic Android",
    "Muqaddas Malik Android developer",
    "Muqaddas Malik apps",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "Muqaddas Malik | Full Stack Developer & Android Engineer Portfolio",
    description:
      "Official portfolio of Muqaddas Malik (Muqaddas12) — Full Stack Developer & Android Engineer. Creator of SugResults, DropLink, True Scan, Malik Electronic, Physio, and SMM World.",
    siteName: "Muqaddas Malik Portfolio",
    images: [
      {
        url: `${siteUrl}/Muqaddas%20Malik.jpg`,
        width: 1200,
        height: 630,
        alt: "Muqaddas Malik Full Stack Developer & Android Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muqaddas Malik | Full Stack Developer & Android Engineer Portfolio",
    description:
      "Official portfolio of Muqaddas Malik — Creator of SugResults, DropLink, True Scan, Malik Electronic, Physio, and SMM World.",
    images: [`${siteUrl}/Muqaddas%20Malik.jpg`],
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

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Muqaddas Malik Portfolio",
  url: siteUrl,
  author: {
    "@type": "Person",
    name: "Muqaddas Malik",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/projects?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muqaddas Malik",
  alternateName: ["Muqaddas", "muqaddasmalik", "Muqaddas12"],
  url: siteUrl,
  image: `${siteUrl}/Muqaddas%20Malik.jpg`,
  jobTitle: "Full Stack & Android Developer",
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
    "https://play.google.com/store/apps/details?id=com.mtbyown.sugresults&hl=en_IN",
    "https://play.google.com/store/apps/details?id=com.mmbyown.truescandocumentscanner&hl=en_IN",
    "https://sugresults.en.uptodown.com/android",
    "https://droplink.en.uptodown.com/android",
    "https://truescan-documentsscanner.en.uptodown.com/android",
    "https://qr-code-scanner-muqaddas.en.uptodown.com/android",
    "https://www.abhailephysiotherapy.ie/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Apps and Software Built by Muqaddas Malik",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        name: "SugResults",
        operatingSystem: "Android",
        applicationCategory: "UtilitiesApplication",
        url: `${siteUrl}/projects/sugresults`,
      },
      {
        "@type": "SoftwareApplication",
        name: "DropLink",
        operatingSystem: "Android",
        applicationCategory: "FileSharingApplication",
        url: `${siteUrl}/projects/droplink`,
      },
      {
        "@type": "SoftwareApplication",
        name: "True Scan",
        operatingSystem: "Android",
        applicationCategory: "ProductivityApplication",
        url: `${siteUrl}/projects/truescan`,
      },
      {
        "@type": "SoftwareApplication",
        name: "Malik Electronic",
        operatingSystem: "Android",
        applicationCategory: "ShoppingApplication",
        url: `${siteUrl}/projects/malikelectronic`,
      },
      {
        "@type": "WebApplication",
        name: "Physio",
        applicationCategory: "HealthApplication",
        url: `${siteUrl}/projects/physio`,
      },
      {
        "@type": "WebApplication",
        name: "SMM World",
        applicationCategory: "MarketingApplication",
        url: `${siteUrl}/projects/smmworld`,
      },
      {
        "@type": "SoftwareApplication",
        name: "QR Code Scanner",
        operatingSystem: "Android",
        applicationCategory: "UtilitiesApplication",
        url: `${siteUrl}/projects/qr-scanner`,
      },
    ],
  },
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Firebase",
    "JavaScript",
    "TypeScript",
    "React Native",
    "Kotlin",
    "Android Development",
    "Mobile App Development",
    "SugResults",
    "DropLink",
    "True Scan",
    "Malik Electronic",
    "Physio",
    "SMM World",
    "QR Code Scanner",
    "Cybersecurity",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.variable} ${robotoMono.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([structuredData, websiteSchema]) }}
        />
        {children}
      </body>
    </html>
  );
}
