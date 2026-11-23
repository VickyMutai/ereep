import type { Metadata } from "next";
import { getAboutContent } from "../../db/about-content";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "About Us | EREEP",
  description:
    "Discover EREEP's journey from peacebuilding to a locally led community organisation in Langas, Eldoret.",
};

export default async function AboutPage() {
  const content = await getAboutContent();
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="EREEP home">
          <img src="/logo.png" alt="Edmund Rice Eldoret Empowerment Program" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a className="active" href="/about">
            About Us
          </a>
          <a href="/projects">Our Impact</a>
          <a href="/stories">Stories</a>
          <a href="/contact">Contact Us</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            <a href="/">Home</a>
            <a href="/projects">Our Impact</a>
            <a href="/stories">Stories</a>
            <a href="/contact">Contact Us</a>
          </div>
        </details>
        <a className="button button-small" href="/#donate">
          Donate
        </a>
      </header>

      <section className="about-hero">
        <div className="about-hero-photo" aria-hidden="true" />
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <p className="eyebrow">About EREEP</p>
          <h1>{content.heroTitle}</h1>
          <p>{content.heroLead}</p>
        </div>
        <a className="scroll-cue" href="#history">
          Explore our journey <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="history section" id="history">
        <div className="history-heading">
          <div>
            <p className="eyebrow dark">Our history</p>
            <h2>{content.historyTitle}</h2>
          </div>
          <p>{content.historyLead}</p>
        </div>
        <div className="history-timeline">
          {content.history.map((item, index) => (
            <article className="history-entry" key={item.title}>
              <div>
                <span>
                  {index === 0
                    ? "2013"
                    : index === 2
                      ? "2018"
                      : index === 3
                        ? "2020"
                        : index === 5
                          ? "2021–Today"
                          : "Our journey"}
                </span>
                <i />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-projects section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our work today</p>
            <h2>{content.projectsTitle}</h2>
          </div>
          <p>{content.projectsLead}</p>
        </div>
        <div className="about-project-grid">
          {content.projects.map((project, index) => (
            <article key={project.title}>
              <span>0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.body}</p>
              <a href="/projects">Explore project →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="today section">
        <div
          className="today-photo"
          role="img"
          aria-label="A community gathered together"
        />
        <div className="today-copy">
          <p className="eyebrow dark">EREEP today</p>
          <h2>{content.todayTitle}</h2>
          <strong>{content.todayLead}</strong>
          <p>{content.todayBody}</p>
          <blockquote>
            Listen to the community. Walk alongside its people. Empower them to
            shape their future.
          </blockquote>
        </div>
      </section>

      <section className="about-tabs section" aria-label="About EREEP">
        <nav className="tab-nav">
          <a href="#impact">Impact</a>
          <a href="#donors">Donors</a>
          <a href="#team">EREEP Team</a>
        </nav>
        <div className="tab-panel" id="impact">
          <p className="eyebrow dark">Our impact</p>
          <h2>Change measured in people and participation.</h2>
          <div className="about-impact-grid">
            <div><strong>20,300</strong><span>Total beneficiaries</span></div>
            <div><strong>100,000</strong><span>Indirect beneficiaries</span></div>
            <div><strong>50</strong><span>Partners and collaborators</span></div>
            <div><strong>7</strong><span>Key donors</span></div>
          </div>
        </div>
        <div className="tab-panel" id="donors">
          <p className="eyebrow dark">Donors and partners</p>
          <h2>Strong partnerships sustain community-led change.</h2>
          <p>EREEP works with key donors and 50 partner organisations and collaborators. Approved donor names and logos will be published here when the organisation confirms the public list.</p>
        </div>
        <div className="tab-panel" id="team">
          <p className="eyebrow dark">EREEP Team</p>
          <h2>Local leadership, shared purpose.</h2>
          <p>EREEP is fully managed by lay staff from the community, with continued oversight and support from the Edmund Rice Christian Brothers. Approved team profiles and photographs will be published here when available.</p>
        </div>
      </section>

      <section className="vision-mission section">
        <article>
          <span>01</span>
          <p className="eyebrow">Our vision</p>
          <h2>{content.vision}</h2>
        </article>
        <article>
          <span>02</span>
          <p className="eyebrow">Our mission</p>
          <h2>{content.mission}</h2>
        </article>
      </section>

      <section className="values section">
        <div className="values-heading">
          <p className="eyebrow dark">What guides us</p>
          <h2>Our core values</h2>
        </div>
        <div className="values-list">
          {content.values.map((value, index) => (
            <article key={value.title}>
              <span>0{index + 1}</span>
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section">
        <div>
          <p className="eyebrow">How we work</p>
          <h2>{content.approachTitle}</h2>
          <strong>{content.approachLead}</strong>
        </div>
        <div>
          <p>{content.approachBody}</p>
          <a className="button" href="/projects">
            See our projects
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
