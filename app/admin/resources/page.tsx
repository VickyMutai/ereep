import { requireChatGPTUser, chatGPTSignOutPath } from '../../chatgpt-auth';
import { getResourcesContent } from '../../../db/resources-content';

export const dynamic = 'force-dynamic';

type AdminResourcesProps = { searchParams?: Promise<{ saved?: string }> };

export default async function AdminResourcesPage({ searchParams }: AdminResourcesProps) {
  const user = await requireChatGPTUser('/admin/resources');
  const [content, query] = await Promise.all([getResourcesContent(), searchParams]);
  return (
    <main className="admin-shell">
      <aside className="admin-sidebar"><a href="/" className="admin-logo"><img src="/logo.png" alt="EREEP" /><span>Content Studio</span></a><nav><a href="/admin">Homepage</a><a href="/admin/about">About page</a><a href="/admin/projects">Projects page</a><a href="/admin/stories">Impact stories</a><a className="active" href="/admin/resources">Resources page</a><a href="/admin/contact">Contact & enquiries</a></nav><a className="admin-view" href="/resources">View Resources page ↗</a></aside>
      <section className="admin-main">
        <header className="admin-header"><div><p>EREEP custom CMS</p><h1>Resources page content</h1></div><div><span>{user.displayName}</span><a href={chatGPTSignOutPath('/admin/resources')}>Sign out</a></div></header>
        {query?.saved === 'true' && <p className="admin-notice" role="status">Resources page content saved successfully.</p>}
        <form className="cms-form" action="/api/admin/resources" method="post">
          <fieldset><legend>Page introduction</legend><label>Headline<textarea name="heroTitle" rows={2} defaultValue={content.heroTitle} required /></label><label>Introduction<textarea name="heroLead" rows={4} defaultValue={content.heroLead} required /></label><label>Stories heading<textarea name="storiesTitle" rows={2} defaultValue={content.storiesTitle} required /></label><label>Stories introduction<textarea name="storiesLead" rows={3} defaultValue={content.storiesLead} required /></label></fieldset>
          {content.stories.map((story, index) => <fieldset key={story.title}><legend>Impact story {index + 1}</legend><label>Project/category<textarea name={'storyCategory' + index} rows={2} defaultValue={story.category} required /></label><label>Title<textarea name={'storyTitle' + index} rows={2} defaultValue={story.title} required /></label><label>Introduction<textarea name={'storyLead' + index} rows={3} defaultValue={story.lead} required /></label><label>Full story<textarea name={'storyBody' + index} rows={12} defaultValue={story.body} required /></label><label>Image URL<textarea name={'storyImage' + index} rows={2} defaultValue={story.image} required /></label></fieldset>)}
          <fieldset><legend>Community impact</legend><label>Heading<textarea name="impactTitle" rows={2} defaultValue={content.impactTitle} required /></label><label>Introduction and verification note<textarea name="impactLead" rows={4} defaultValue={content.impactLead} required /></label></fieldset>
          <section className="cms-stats">{content.stats.map((stat, index) => <fieldset key={stat.label}><legend>Impact figure {index + 1}</legend><label>Value<textarea name={'statValue' + index} rows={1} defaultValue={stat.value} required /></label><label>Label<textarea name={'statLabel' + index} rows={2} defaultValue={stat.label} required /></label></fieldset>)}</section>
          <div className="cms-actions"><a href="/resources">Cancel</a><button type="submit">Save Resources page</button></div>
        </form>
      </section>
    </main>
  );
}
