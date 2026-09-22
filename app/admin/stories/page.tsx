import { requireChatGPTUser, chatGPTSignOutPath } from '../../chatgpt-auth';
import { getStoriesContent } from '../../../db/stories-content';

export const dynamic = 'force-dynamic';

type AdminStoriesProps = { searchParams?: Promise<{ saved?: string }> };

export default async function AdminStoriesPage({ searchParams }: AdminStoriesProps) {
  const user = await requireChatGPTUser('/admin/stories');
  const [content, query] = await Promise.all([getStoriesContent(), searchParams]);
  return (
    <main className="admin-shell">
      <aside className="admin-sidebar"><a href="/" className="admin-logo"><img src="/logo.png" alt="EREEP" /><span>Content Studio</span></a><nav><a href="/admin">Homepage</a><a href="/admin/about">About page</a><a href="/admin/projects">Projects page</a><a className="active" href="/admin/stories">Impact stories</a><a href="/admin/resources">Resources page</a><a href="/admin/contact">Contact & enquiries</a></nav><a className="admin-view" href="/stories">View Impact Stories ↗</a></aside>
      <section className="admin-main">
        <header className="admin-header"><div><p>EREEP custom CMS</p><h1>Impact Stories content</h1></div><div><span>{user.displayName}</span><a href={chatGPTSignOutPath('/admin/stories')}>Sign out</a></div></header>
        {query?.saved === 'true' && <p className="admin-notice" role="status">Impact Stories content saved successfully.</p>}
        <form className="cms-form" action="/api/admin/stories" method="post">
          <fieldset><legend>Stories introduction</legend><label>Headline<textarea name="heroTitle" rows={2} defaultValue={content.heroTitle} required /></label><label>Introduction<textarea name="heroLead" rows={4} defaultValue={content.heroLead} required /></label></fieldset>
          {content.stories.map((story, storyIndex) => <section className="cms-project-group" key={story.slug}>
            <h2>{story.title}</h2><p className="cms-help">Public URL: /stories/{story.slug}</p>
            <fieldset><legend>Story introduction</legend><label>Project/category<textarea name={'storyCategory' + storyIndex} rows={2} defaultValue={story.category} required /></label><label>Title<textarea name={'storyTitle' + storyIndex} rows={2} defaultValue={story.title} required /></label><label>Summary<textarea name={'storySummary' + storyIndex} rows={3} defaultValue={story.summary} required /></label><label>Temporary image URL<textarea name={'storyImage' + storyIndex} rows={2} defaultValue={story.image} required /></label><label>Image description<textarea name={'storyImageAlt' + storyIndex} rows={2} defaultValue={story.imageAlt} required /></label></fieldset>
            {story.sections.map((section, sectionIndex) => <fieldset key={section.heading}><legend>Article section {sectionIndex + 1}</legend><label>Section heading<textarea name={'story' + storyIndex + 'SectionHeading' + sectionIndex} rows={2} defaultValue={section.heading} required /></label><label>Section content<textarea name={'story' + storyIndex + 'SectionBody' + sectionIndex} rows={14} defaultValue={section.body} required /></label></fieldset>)}
          </section>)}
          <div className="cms-actions"><a href="/stories">Cancel</a><button type="submit">Save Impact Stories</button></div>
        </form>
      </section>
    </main>
  );
}
