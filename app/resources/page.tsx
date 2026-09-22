import type { Metadata } from 'next';
import { getResourcesContent } from '../../db/resources-content';
import { SiteFooter } from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Impact & Resources | EREEP',
  description: 'Read stories of community impact and explore EREEP\'s reach across Langas, Eldoret.',
};

export default async function ResourcesPage() {
  const content = await getResourcesContent();
  const storySlugs = ['kevin-finding-purpose', 'clemencia-caregiver-to-entrepreneur', 'keeping-girls-in-school'];
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="EREEP home"><img src="/logo.png" alt="Edmund Rice Eldoret Empowerment Program" /></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/about">About Us</a><a href="/projects">Projects</a><a href="/stories">Stories</a><a className="active" href="/resources">Resources</a><a href="/contact">Contact</a></nav>
        <details className="mobile-menu"><summary aria-label="Open navigation">Menu</summary><div><a href="/">Home</a><a href="/about">About Us</a><a href="/projects">Projects</a><a href="/stories">Stories</a><a href="/contact">Contact</a></div></details>
        <a className="button button-small" href="/#donate">Donate</a>
      </header>

      <section className="resources-hero">
        <div className="resources-hero-image" aria-hidden="true" /><div className="resources-hero-overlay" />
        <div className="resources-hero-content"><p className="eyebrow">Impact and resources</p><h1>{content.heroTitle}</h1><p>{content.heroLead}</p></div>
      </section>

      <section className="stories section">
        <div className="section-heading"><div><p className="eyebrow dark">From the community</p><h2>{content.storiesTitle}</h2></div><p>{content.storiesLead}</p></div>
        <div className="story-list">{content.stories.map((story, index) => (
          <article className="story" key={story.title}>
            <div className="story-image" style={{ backgroundImage: 'url(' + story.image + ')' }} role="img" aria-label={story.title} />
            <div className="story-copy"><span>0{index + 1}</span><p className="story-category">{story.category}</p><h3>{story.title}</h3><strong>{story.lead}</strong><a className="story-read-link" href={'/stories/' + storySlugs[index]}>Read the full story <i aria-hidden="true">→</i></a></div>
          </article>
        ))}</div>
      </section>

      <section className="impact section">
        <div className="impact-heading"><p className="eyebrow">Community impact</p><h2>{content.impactTitle}</h2><p>{content.impactLead}</p></div>
        <div className="impact-grid">{content.stats.map((stat, index) => <article className={index === 12 ? 'featured' : ''} key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></article>)}</div>
      </section>

      <section className="resources-note section"><div><p className="eyebrow dark">Growing resource library</p><h2>Reports and publications will be added as they become available.</h2></div><p>The CMS foundation is ready for future reports, downloadable publications, partner materials and additional impact stories without changing the page structure.</p></section>

      <SiteFooter />
    </main>
  );
}
