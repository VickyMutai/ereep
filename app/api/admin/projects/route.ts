import { getChatGPTUser } from '../../../chatgpt-auth';
import { defaultProjectsContent, saveProjectsContent, type ProjectContent, type ProjectsContent } from '../../../../db/projects-content';

function value(form: FormData, key: string, fallback: string) {
  return String(form.get(key) ?? '').trim() || fallback;
}

function projectFromForm(form: FormData, project: ProjectContent, projectIndex: number): ProjectContent {
  return {
    title: value(form, 'projectTitle' + projectIndex, project.title),
    shortTitle: value(form, 'projectShortTitle' + projectIndex, project.shortTitle),
    tagline: value(form, 'projectTagline' + projectIndex, project.tagline),
    overview: value(form, 'projectOverview' + projectIndex, project.overview),
    goal: value(form, 'projectGoal' + projectIndex, project.goal),
    image: value(form, 'projectImage' + projectIndex, project.image),
    areas: project.areas.map((area, areaIndex) => ({
      title: value(form, 'areaTitle' + projectIndex + '_' + areaIndex, area.title),
      subtitle: value(form, 'areaSubtitle' + projectIndex + '_' + areaIndex, area.subtitle),
      body: value(form, 'areaBody' + projectIndex + '_' + areaIndex, area.body),
    })),
  };
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.redirect(new URL('/signin-with-chatgpt?return_to=%2Fadmin%2Fprojects', request.url), 303);
  const form = await request.formData();
  const content: ProjectsContent = {
    heroTitle: value(form, 'heroTitle', defaultProjectsContent.heroTitle),
    heroLead: value(form, 'heroLead', defaultProjectsContent.heroLead),
    sectionTitle: value(form, 'sectionTitle', defaultProjectsContent.sectionTitle),
    sectionLead: value(form, 'sectionLead', defaultProjectsContent.sectionLead),
    projects: defaultProjectsContent.projects.map((project, index) => projectFromForm(form, project, index)),
    advocacyTitle: value(form, 'advocacyTitle', defaultProjectsContent.advocacyTitle),
    advocacyTagline: value(form, 'advocacyTagline', defaultProjectsContent.advocacyTagline),
    advocacyBody: value(form, 'advocacyBody', defaultProjectsContent.advocacyBody),
  };
  await saveProjectsContent(content);
  return Response.redirect(new URL('/admin/projects?saved=true', request.url), 303);
}
