import type { Metadata } from "next";
import { getStoriesContent, getStoryBySlug } from "../../../db/stories-content";
import { SiteFooter } from "../../components/SiteFooter";

type StoryPageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);
  if (!story) return { title: "Story not found | EREEP" };
  return {
    title: story.title + " | EREEP",
    description: story.summary,
    openGraph: {
      title: story.title,
      description: story.summary,
      images: [{ url: story.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: story.title,
      description: story.summary,
      images: [story.image],
    },
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const [story, content] = await Promise.all([
    getStoryBySlug(slug),
    getStoriesContent(),
  ]);
  if (!story)
    return (
      <main className="story-not-found">
        <a href="/stories">← Back to stories</a>
        <h1>Story not found.</h1>
        <p>The story may have moved or is not yet available.</p>
      </main>
    );
  const related = content.stories.filter((item) => item.slug !== story.slug);
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="EREEP home">
          <img src="/logo.png" alt="Edmund Rice Eldoret Empowerment Program" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/projects">Projects</a>
          <a className="active" href="/stories">
            Stories
          </a>
          <a href="/resources">Resources</a>
          <a href="/contact">Contact</a>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/projects">Projects</a>
            <a href="/stories">Stories</a>
            <a href="/resources">Resources</a>
            <a href="/contact">Contact</a>
          </div>
        </details>
        <a className="button button-small" href="/#donate">
          Donate
        </a>
      </header>

      <article>
        <header className="story-detail-hero">
          <div
            className="story-detail-photo"
            style={{ backgroundImage: "url(" + story.image + ")" }}
            role="img"
            aria-label={story.imageAlt}
          />
          <div className="story-detail-overlay" />
          <div className="story-detail-heading">
            <a href="/stories">← All impact stories</a>
            <p className="eyebrow">{story.category}</p>
            <h1>{story.title}</h1>
            <strong>{story.summary}</strong>
            <small>Representative image</small>
          </div>
        </header>
        <div className="story-article section">
          <aside>
            <p>Impact story</p>
            <strong>{story.category}</strong>
            <span>From Langas, Eldoret</span>
          </aside>
          <div className="story-article-body">
            {story.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <div>
                  {section.body.split("\n\n").map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>

      <section className="related-stories section">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark">Continue reading</p>
            <h2>More stories of impact</h2>
          </div>
        </div>
        <div>
          {related.map((item) => (
            <a href={"/stories/" + item.slug} key={item.slug}>
              <span style={{ backgroundImage: "url(" + item.image + ")" }} />
              <p>{item.category}</p>
              <h3>{item.title}</h3>
              <strong>Read story →</strong>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
