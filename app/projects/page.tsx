import type { Metadata } from 'next';
import { getProjectsContent } from '../../db/projects-content';

export const metadata: Metadata = {
  title: 'Our Projects | EREEP',
  description: 'Explore EREEP programmes supporting children, young people, girls, young mothers, persons with disabilities and caregivers in Langas.',
};

export default async function ProjectsPage() {
  const content = await getProjectsContent();
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="EREEP home"><img src="/logo.png" alt="Edmund Rice Eldoret Empowerment Program" /></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/about">About Us</a><a className="active" href="/projects">Projects</a><a href="/stories">Stories</a><a href="/resources">Resources</a><a href="/contact">Contact</a></nav>
        <details className="mobile-menu"><summary aria-label="Open navigation">Menu</summary><div><a href="/">Home</a><a href="/about">About Us</a><a href="/stories">Stories</a><a href="/resources">Resources</a><a href="/contact">Contact</a></div></details>
        <a className="button button-small" href="/#donate">Donate</a>
      </header>

      <section className="projects-hero">
        <div className="projects-hero-photo" aria-hidden="true" /><div className="projects-hero-overlay" />
        <div className="projects-hero-content"><p className="eyebrow">Our projects</p><h1>{content.heroTitle}</h1><p>{content.heroLead}</p></div>
      </section>

      <section className="projects-intro section">
        <div><p className="eyebrow dark">How we create change</p><h2>{content.sectionTitle}</h2></div>
        <div><p>{content.sectionLead}</p><nav className="project-jump" aria-label="Jump to project">{content.projects.map((project, index) => <a href={'#project-' + (index + 1)} key={project.title}><span>0{index + 1}</span>{project.shortTitle}</a>)}</nav></div>
      </section>

      {content.projects.map((project, projectIndex) => (
        <section className={'project-feature project-tone-' + (projectIndex + 1)} id={'project-' + (projectIndex + 1)} key={project.title}>
          <div className="project-image" style={{ backgroundImage: 'url(' + project.image + ')' }} role="img" aria-label={project.title} />
          <div className="project-overview">
            <span className="project-count">0{projectIndex + 1} / 03</span>
            <p className="eyebrow">{project.shortTitle}</p><h2>{project.title}</h2><strong>{project.tagline}</strong><p>{project.overview}</p>
            <div className="project-goal"><span>Our goal</span><p>{project.goal}</p></div>
          </div>
          <div className="project-areas">
            <div><p className="eyebrow dark">What we do</p><h3>Programme areas</h3></div>
            <div className="project-accordion">{project.areas.map((area, index) => <details key={area.title} open={index === 0}><summary><span>0{index + 1}</span><div><strong>{area.title}</strong><small>{area.subtitle}</small></div><i aria-hidden="true">+</i></summary><p>{area.body}</p></details>)}</div>
          </div>
        </section>
      ))}

      <section className="advocacy section">
        <div><p className="eyebrow">Across every project</p><h2>{content.advocacyTitle}</h2><strong>{content.advocacyTagline}</strong></div>
        <div><p>{content.advocacyBody}</p></div>
      </section>

      <section className="project-cta section"><p className="eyebrow dark">Stand with the community</p><h2>Stronger programmes grow from strong partnerships.</h2><div><a className="button" href="/contact">Work with us</a><a className="underlined-link" href="/#newsletter">Follow our work →</a></div></section>

      <footer><a className="footer-brand" href="/"><img src="/logo.png" alt="" /><strong>Edmund Rice Eldoret<br />Empowerment Program</strong></a><p>Empowering, liberating and transforming lives in the marginalized Langas community.</p><div><a href="/about">About</a><a href="/projects">Projects</a><a href="/stories">Stories</a><a href="/resources">Resources</a><a href="/admin">CMS</a></div><span>© {new Date().getFullYear()} EREEP</span></footer>
    </main>
  );
}
