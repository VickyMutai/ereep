import type { Metadata } from "next";
import { getStoriesContent } from "../../db/stories-content";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Impact Stories | EREEP",
  description:
    "Read stories of courage, opportunity and community-led change from EREEP in Langas, Eldoret.",
};

export default async function StoriesPage() {
  const content = await getStoriesContent();
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="EREEP home">
          <img src="/logo.png" alt="Edmund Rice Eldoret Empowerment Program" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/projects">Our Impact</a>
          <a className="active" href="/stories">
            Stories
          </a>
          <a href="/contact">Contact Us</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/projects">Our Impact</a>
            <a href="/stories">Stories</a>
            <a href="/contact">Contact Us</a>
          </div>
        </details>
        <a className="button button-small" href="/#donate">
          Donate
        </a>
      </header>

      <section className="stories-hero">
        <div className="stories-hero-image" aria-hidden="true" />
        <div className="stories-hero-overlay" />
        <div className="stories-hero-content">
          <p className="eyebrow">Impact stories</p>
          <h1>{content.heroTitle}</h1>
          <p>{content.heroLead}</p>
        </div>
      </section>

      <section className="story-library section">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">From the community</p>
            <h2>Stories of courage and possibility</h2>
          </div>
          <p>
            These stories show how learning, mentorship, advocacy and practical
            opportunity can help people shape their own future.
          </p>
        </div>
        <div className="story-card-grid">
          {content.stories.map((story, index) => (
            <article className="story-card" key={story.slug}>
              <a
                className="story-card-image"
                href={"/stories/" + story.slug}
                style={{ backgroundImage: "url(" + story.image + ")" }}
                aria-label={"Read " + story.title}
              />
              <div>
                <span>0{index + 1}</span>
                <p>{story.category}</p>
                <h2>
                  <a href={"/stories/" + story.slug}>{story.title}</a>
                </h2>
                <strong>{story.summary}</strong>
                <a className="story-read-link" href={"/stories/" + story.slug}>
                  Read the full story <i aria-hidden="true">→</i>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="story-cta section">
        <p className="eyebrow">Make more stories possible</p>
        <h2>Stand alongside communities creating lasting change.</h2>
        <div>
          <a className="button" href="/contact">
            Partner with EREEP
          </a>
          <span>Online donations will be added in a later phase.</span>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
