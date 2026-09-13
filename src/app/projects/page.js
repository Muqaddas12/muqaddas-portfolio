import ProjectsPage from "../../components/ProjectsPage";

const siteUrl = "https://muqaddas-portfolio-zeta.vercel.app";

export const metadata = {
  title: "All Projects & Mobile Apps",
  description:
    "Explore all apps and live platforms developed by Muqaddas Malik — from published Android apps on Google Play Store & Uptodown to custom full-stack web platforms.",
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  keywords: [
    "Muqaddas Malik projects",
    "SugResults app",
    "SugResults Android",
    "SugResults Play Store",
    "SugResults Uptodown",
    "DropLink app",
    "DropLink Android",
    "DropLink Play Store",
    "DropLink Uptodown",
    "True Scan app",
    "True Scan document scanner",
    "True Scan Play Store",
    "True Scan Uptodown",
    "Physio website",
    "SMM World",
    "SMM World website",
    "QR Code Scanner app",
    "QR Code Scanner Android",
    "QR Code Scanner Play Store",
    "QR Code Scanner Uptodown",
    "Malik Electronic app",
    "Malik Electronic Android",
    "Muqaddas12 apps",
    "Muqaddas Malik Android developer",
  ],
  openGraph: {
    title: "All Projects & Mobile Apps | Muqaddas Malik",
    description:
      "SugResults, DropLink, True Scan, Malik Electronic, Physio, SMM World, QR Code Scanner — apps on Google Play Store & Uptodown, plus live websites built by Muqaddas Malik.",
    url: `${siteUrl}/projects`,
    siteName: "Muqaddas Malik Portfolio",
    images: [
      {
        url: `${siteUrl}/Muqaddas%20Malik.jpg`,
        width: 1200,
        height: 630,
        alt: "Muqaddas Malik Projects & Apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Projects & Mobile Apps | Muqaddas Malik",
    description:
      "SugResults, DropLink, True Scan, Malik Electronic, Physio, SMM World, QR Code Scanner — Android apps and live websites.",
    images: [`${siteUrl}/Muqaddas%20Malik.jpg`],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Projects",
      item: `${siteUrl}/projects`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProjectsPage />
    </>
  );
}
