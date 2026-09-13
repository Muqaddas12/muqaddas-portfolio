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

  const title = `${project.title} (${project.version}) – Download on Android & Live Web | Muqaddas Malik`;
  const description = `${project.title}: ${project.description} Developed by Muqaddas Malik. Ratings, downloads, and older versions.`;

  return {
    title,
    description,
    keywords: [
      project.title,
      `${project.title} app`,
      `${project.title} download`,
      `${project.title} apk`,
      `${project.title} play store`,
      `${project.title} uptodown`,
      "Muqaddas Malik",
      "Muqaddas Malik apps",
    ],
    openGraph: {
      title,
      description,
      url: `https://muqaddas-portfolio-zeta.vercel.app/projects/${project.slug}`,
      images: [
        {
          url: project.image,
          alt: project.title,
        },
      ],
    },
  };
}

export default function Page({ params }) {
  const project = getProjectBySlug(params.slug);
  return <ProjectDetailPage project={project} />;
}

