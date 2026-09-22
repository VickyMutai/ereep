import { requireChatGPTUser, chatGPTSignOutPath } from '../../chatgpt-auth';
import { getAboutContent } from '../../../db/about-content';

type AdminAboutProps = { searchParams?: Promise<{ saved?: string }> };

export default async function AdminAboutPage({ searchParams }: AdminAboutProps) {
  const user = await requireChatGPTUser('/admin/about');
  const [content, query] = await Promise.all([getAboutContent(), searchParams]);
  return (
    <main className="admin-shell">
      <aside className="admin-sidebar"><a href="/" className="admin-logo"><img src="/logo.png" alt="EREEP" /><span>Content Studio</span></a><nav><a href="/admin">Homepage</a><a className="active" href="/admin/about">About page</a><a href="/admin/projects">Projects page</a><span>Resources · soon</span></nav><a className="admin-view" href="/about">View About page ↗</a></aside>
      <section className="admin-main">
        <header className="admin-header"><div><p>EREEP custom CMS</p><h1>About page content</h1></div><div><span>{user.displayName}</span><a href={chatGPTSignOutPath('/admin/about')}>Sign out</a></div></header>
        {query?.saved === 'true' && <p className="admin-notice" role="status">About page content saved successfully.</p>}
        <form className="cms-form" action="/api/admin/about" method="post">
          <fieldset><legend>Page introduction</legend><label>Headline<textarea name="heroTitle" rows={2} defaultValue={content.heroTitle} required /></label><label>Introduction<textarea name="heroLead" rows={3} defaultValue={content.heroLead} required /></label></fieldset>
          <fieldset><legend>History introduction</legend><label>Heading<textarea name="historyTitle" rows={2} defaultValue={content.historyTitle} required /></label><label>Supporting line<textarea name="historyLead" rows={2} defaultValue={content.historyLead} required /></label></fieldset>
          {content.history.map((item, index) => <fieldset key={item.title}><legend>History block {index + 1}</legend><label>Title<textarea name={'historyTitle' + index} rows={2} defaultValue={item.title} required /></label><label>Story<textarea name={'historyBody' + index} rows={8} defaultValue={item.body} required /></label></fieldset>)}
          <fieldset><legend>Projects introduction</legend><label>Heading<textarea name="projectsTitle" rows={2} defaultValue={content.projectsTitle} required /></label><label>Supporting line<textarea name="projectsLead" rows={2} defaultValue={content.projectsLead} required /></label></fieldset>
          {content.projects.map((item, index) => <fieldset key={item.title}><legend>Project {index + 1}</legend><label>Title<textarea name={'projectTitle' + index} rows={2} defaultValue={item.title} required /></label><label>Description<textarea name={'projectBody' + index} rows={5} defaultValue={item.body} required /></label></fieldset>)}
          <fieldset><legend>EREEP today</legend><label>Heading<textarea name="todayTitle" rows={2} defaultValue={content.todayTitle} required /></label><label>Supporting line<textarea name="todayLead" rows={2} defaultValue={content.todayLead} required /></label><label>Body<textarea name="todayBody" rows={8} defaultValue={content.todayBody} required /></label></fieldset>
          <fieldset><legend>Vision and mission</legend><label>Vision<textarea name="vision" rows={3} defaultValue={content.vision} required /></label><label>Mission<textarea name="mission" rows={4} defaultValue={content.mission} required /></label></fieldset>
          {content.values.map((item, index) => <fieldset key={item.title}><legend>Core value {index + 1}</legend><label>Title<textarea name={'valueTitle' + index} rows={2} defaultValue={item.title} required /></label><label>Description<textarea name={'valueBody' + index} rows={4} defaultValue={item.body} required /></label></fieldset>)}
          <fieldset><legend>Our approach</legend><label>Heading<textarea name="approachTitle" rows={2} defaultValue={content.approachTitle} required /></label><label>Supporting line<textarea name="approachLead" rows={2} defaultValue={content.approachLead} required /></label><label>Body<textarea name="approachBody" rows={12} defaultValue={content.approachBody} required /></label></fieldset>
          <div className="cms-actions"><a href="/about">Cancel</a><button type="submit">Save About page</button></div>
        </form>
      </section>
    </main>
  );
}
