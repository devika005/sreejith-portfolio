import React from "react";

export const VERIFIED_PROJECTS = {
  professional: [
    {
      id: "prof-1",
      title: "Brandaid Digital Campaign 01",
      category: "Professional Work",
      reelUrl: "https://www.instagram.com/reel/DeGYfs6zFKv/",
      tags: ["Video Editing", "Videography", "Post-Production"],
    },
    {
      id: "prof-2",
      title: "LEAD College Media Reel 02",
      category: "Professional Work",
      reelUrl: "https://www.instagram.com/reel/DVlUeCwk4xA/",
      tags: ["Event Coverage", "Short-Form", "Branding"],
    },
    {
      id: "prof-3",
      title: "Social Campaign Reel 03",
      category: "Professional Work",
      reelUrl: "https://www.instagram.com/reel/DVYKVxrk6Fy/",
      tags: ["Social Media", "Reels", "Content Strategy"],
    },
  ],

  personal: [
    {
      id: "pers-1",
      title: "POV Creative Experiment 01",
      category: "Personal POV Work",
      reelUrl: "https://www.instagram.com/reel/Dd5hXn_zYUM/",
      tags: ["Cinematic", "POV Photography", "Visual Storytelling"],
    },
    {
      id: "pers-2",
      title: "POV Creative Experiment 02",
      category: "Personal POV Work",
      reelUrl: "https://www.instagram.com/reel/DdBwNtwOuw0/",
      tags: ["Framing", "Color Profiles", "Shorts"],
    },
    {
      id: "pers-3",
      title: "POV Creative Experiment 03",
      category: "Personal POV Work",
      reelUrl: "https://www.instagram.com/reel/DdrOA7ex3KZ/",
      tags: ["Atmospheric", "Mood Reel", "Post-Production"],
    },
    {
      id: "pers-4",
      title: "POV Creative Experiment 04",
      category: "Personal POV Work",
      reelUrl: "https://www.instagram.com/reel/DeOu3j9z6HM/",
      tags: ["Vlog Aesthetic", "Visual Rhythm", "Content Creation"],
    },
  ],
};

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-content">
        <span className="project-category">{project.category}</span>

        <h3>{project.title}</h3>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="project-tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <a
          className="project-link"
          href={project.reelUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch on Instagram <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function ProjectSection({ title, description, projects }) {
  return (
    <section className="project-section">
      <div className="section-heading">
        <p className="section-label">SELECTED WORK</p>
        <h2>{title}</h2>
        <p className="section-description">{description}</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="portfolio">
      <header className="hero">
        <p className="hero-label">CREATIVE PORTFOLIO</p>

        <h1>
          Stories told
          <br />
          through <span>visuals.</span>
        </h1>

        <p className="hero-description">
          A collection of professional projects and personal creative
          experiments in videography, video editing, and visual storytelling.
        </p>

        <a className="hero-button" href="#professional-work">
          Explore My Work <span aria-hidden="true">↓</span>
        </a>
      </header>

      <div id="professional-work">
        <ProjectSection
          title="Professional Work"
          description="Campaigns, event coverage, and social media content."
          projects={VERIFIED_PROJECTS.professional}
        />
      </div>

      <ProjectSection
        title="Personal POV Work"
        description="Personal experiments in cinematic visuals, framing, and storytelling."
        projects={VERIFIED_PROJECTS.personal}
      />

      <footer className="portfolio-footer">
        <p>Creative work. Visual stories. Always experimenting.</p>
        <p>© {new Date().getFullYear()} Creative Portfolio</p>
      </footer>
    </main>
  );
}

export default App;