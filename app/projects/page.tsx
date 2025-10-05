import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";
import { getProjectPosts } from "@/app/lib/posts";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  let mdxProjects: ReturnType<typeof getProjectPosts> = [];

  try {
    mdxProjects = getProjectPosts();
  } catch (error) {
    // If there's an error reading MDX projects, just show static projects
    console.warn('No MDX projects found:', error);
  }

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Projects</h1>
      <div>
        {/* MDX-based projects */}
        {mdxProjects.length > 0 && mdxProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80">
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.metadata.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.metadata.summary}
              </p>
            </div>
          </Link>
        ))}

        {/* Static projects from project-data */}
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80"
            rel="noopener noreferrer">

            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
