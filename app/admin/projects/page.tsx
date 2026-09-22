import { requireChatGPTUser, chatGPTSignOutPath } from '../../chatgpt-auth';
import { getProjectsContent } from '../../../db/projects-content';

type AdminProjectsProps = { searchParams?: Promise<{ saved?: string }> };

export default async function AdminProjectsPage({ searchParams }: AdminProjectsProps) {
  const user = await requireChatGPTUser('/admin/projects');
  const [content, query] = await Promise.all([getProjectsContent(), searchParams]);
  return (
    <main className="admin-shell">
      <aside className="admin-sidebar"><a href="/" className="admin-logo"><img src="/logo.png" alt="EREEP" /><span>Content Studio</span></a><nav><a href="/admin">Homepage</a><a href="/admin/about">About page</a><a className="active" href="/admin/projects">Projects page</a><span>Resources · soon</span></nav><a className="admin-view" href="/projects">View Projects page ↗</a></aside>
      <section className="admin-main">
        <header className="admin-header"><div><p>EREEP custom CMS</p><h1>Projects page content</h1></div><div><span>{user.displayName}</span><a href={chatGPTSignOutPath('/admin/projects')}>Sign out</a></div></header>
        {query?.saved === 'true' && <p className="admin-notice" role="status">Projects page content saved successfully.</p>}
        <form className="cms-form" action="/api/admin/projects" method="post">
          <fieldset><legend>Page introduction</legend><label>Headline<textarea name="heroTitle" rows={2} defaultValue={content.heroTitle} required /></label><label>Introduction<textarea name="heroLead" rows={4} defaultValue={content.heroLead} required /></label><label>Projects heading<textarea name="sectionTitle" rows={2} defaultValue={content.sectionTitle} required /></label><label>Projects introduction<textarea name="sectionLead" rows={3} defaultValue={content.sectionLead} required /></label></fieldset>
          {content.projects.map((project, projectIndex) => (
            <section className="cms-project-group" key={project.title}>
              <h2>Project {projectIndex + 1}: {project.shortTitle}</h2>
              <fieldset><legend>Project overview</legend><label>Full title<textarea name={'projectTitle' + projectIndex} rows={2} defaultValue={project.title} required /></label><label>Short title<textarea name={'projectShortTitle' + projectIndex} rows={2} defaultValue={project.shortTitle} required /></label><label>Tagline<textarea name={'projectTagline' + projectIndex} rows={2} defaultValue={project.tagline} required /></label><label>Overview<textarea name={'projectOverview' + projectIndex} rows={8} defaultValue={project.overview} required /></label><label>Goal<textarea name={'projectGoal' + projectIndex} rows={3} defaultValue={project.goal} required /></label><label>Image URL<textarea name={'projectImage' + projectIndex} rows={2} defaultValue={project.image} required /></label></fieldset>
              {project.areas.map((area, areaIndex) => <fieldset key={area.title}><legend>Programme area {areaIndex + 1}</legend><label>Title<textarea name={'areaTitle' + projectIndex + '_' + areaIndex} rows={2} defaultValue={area.title} required /></label><label>Supporting line<textarea name={'areaSubtitle' + projectIndex + '_' + areaIndex} rows={2} defaultValue={area.subtitle} required /></label><label>Body<textarea name={'areaBody' + projectIndex + '_' + areaIndex} rows={7} defaultValue={area.body} required /></label></fieldset>)}
            </section>
          ))}
          <fieldset><legend>Cross-cutting advocacy and partnerships</legend><label>Heading<textarea name="advocacyTitle" rows={2} defaultValue={content.advocacyTitle} required /></label><label>Tagline<textarea name="advocacyTagline" rows={2} defaultValue={content.advocacyTagline} required /></label><label>Body<textarea name="advocacyBody" rows={10} defaultValue={content.advocacyBody} required /></label></fieldset>
          <div className="cms-actions"><a href="/projects">Cancel</a><button type="submit">Save Projects page</button></div>
        </form>
      </section>
    </main>
  );
}
