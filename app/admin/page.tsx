import { requireChatGPTUser, chatGPTSignOutPath } from '../chatgpt-auth';
import { getHomeContent } from '../../db/site-content';

type AdminProps = { searchParams?: Promise<{ saved?: string }> };

export default async function AdminPage({ searchParams }: AdminProps) {
  const user = await requireChatGPTUser('/admin');
  const [content, query] = await Promise.all([getHomeContent(), searchParams]);
  return (
    <main className="admin-shell">
      <aside className="admin-sidebar"><a href="/" className="admin-logo"><img src="/logo.png" alt="EREEP" /><span>Content Studio</span></a><nav><a className="active" href="/admin">Homepage</a><a href="/admin/about">About page</a><a href="/admin/projects">Projects page</a><span>Resources · soon</span></nav><a className="admin-view" href="/">View website ↗</a></aside>
      <section className="admin-main">
        <header className="admin-header"><div><p>EREEP custom CMS</p><h1>Homepage content</h1></div><div><span>{user.displayName}</span><a href={chatGPTSignOutPath('/admin')}>Sign out</a></div></header>
        {query?.saved === 'true' && <p className="admin-notice" role="status">Homepage content saved successfully.</p>}
        <form className="cms-form" action="/api/admin/content" method="post">
          <fieldset><legend>Hero section</legend><label>Headline<textarea name="heroTitle" rows={2} defaultValue={content.heroTitle} required /></label><label>Introduction<textarea name="heroBody" rows={4} defaultValue={content.heroBody} required /></label></fieldset>
          <fieldset><legend>Who we are</legend><label>Section headline<textarea name="introTitle" rows={2} defaultValue={content.introTitle} required /></label><label>First paragraph<textarea name="introBodyOne" rows={5} defaultValue={content.introBodyOne} required /></label><label>Second paragraph<textarea name="introBodyTwo" rows={5} defaultValue={content.introBodyTwo} required /></label></fieldset>
          <fieldset><legend>Newsletter</legend><label>Headline<textarea name="newsletterTitle" rows={2} defaultValue={content.newsletterTitle} required /></label><label>Description<textarea name="newsletterBody" rows={3} defaultValue={content.newsletterBody} required /></label></fieldset>
          <div className="cms-actions"><a href="/">Cancel</a><button type="submit">Save homepage</button></div>
        </form>
      </section>
    </main>
  );
}
