import { allProjects, getProjectBySlug } from "../../../components/portfolioData";
import ProjectDetailPage from "../../../components/ProjectDetailPage";

export function generateStaticParams() {
  return allProjects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Muqaddas Malik",
    };
  }

  const siteUrl = "https://muqaddas-portfolio-zeta.vercel.app";
  const title = `${project.title} (${project.version}) – Download on Android & Live Web | Muqaddas Malik`;
  const description = `${project.title}: ${project.description} Developed by Muqaddas Malik. Ratings, downloads, and older versions.`;
  const imageUrl = project.image.startsWith("http")
    ? project.image
    : `${siteUrl}${project.image.startsWith("/") ? "" : "/"}${project.image}`;

  return {
    title,
    description,
    keywords: [
      project.title,
      `${project.title} app`,
      `${project.title} download`,
      `${project.title} apk`,
      `${project.title} Android`,
      `${project.title} play store`,
      `${project.title} uptodown`,
      `${project.title} Muqaddas`,
      `${project.title} Muqaddas Malik`,
      "Muqaddas Malik",
      "Muqaddas",
      "muqaddasmalik",
      "Muqaddas12",
      "Muqaddas Malik apps",
      "Muqaddas Malik developer",
    ],
    alternates: {
      canonical: `${siteUrl}/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/projects/${project.slug}`,
      siteName: "Muqaddas Malik Portfolio",
      images: [
        {
          url: imageUrl,
          width: 512,
          height: 512,
          alt: `${project.title} by Muqaddas Malik`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default function Page({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return <ProjectDetailPage project={null} />;
  }

  const siteUrl = "https://muqaddas-portfolio-zeta.vercel.app";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": project.type === "app" ? "SoftwareApplication" : "WebApplication",
    name: project.title,
    applicationCategory: project.category,
    operatingSystem: project.type === "app" ? "Android" : "All (Web)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: project.rating || "4.8",
      ratingCount: project.ratingCount ? parseInt(project.ratingCount) || 120 : 120,
    },
    author: {
      "@type": "Person",
      name: "Muqaddas Malik",
      alternateName: ["Muqaddas", "muqaddasmalik", "Muqaddas12"],
      url: siteUrl,
    },
    creator: {
      "@type": "Person",
      name: "Muqaddas Malik",
      url: siteUrl,
    },
    softwareVersion: project.version,
    description: project.description,
    image: `${siteUrl}${project.image}`,
    downloadUrl: project.downloadUrl || project.playStore || project.live,
    screenshot: (project.screenshots || []).map((s) => `${siteUrl}${s}`),
  };

  const breadcrumbLd = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${siteUrl}/projects/${project.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([jsonLd, breadcrumbLd]) }}
      />
      <ProjectDetailPage project={project} />
    </>
  );
}

