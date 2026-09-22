import { getChatGPTUser } from '../../../chatgpt-auth';
import { defaultAboutContent, saveAboutContent, type AboutContent, type AboutItem } from '../../../../db/about-content';

function value(form: FormData, key: string, fallback: string) {
  return String(form.get(key) ?? '').trim() || fallback;
}

function items(form: FormData, prefix: string, defaults: AboutItem[]) {
  return defaults.map((item, index) => ({
    title: value(form, prefix + 'Title' + index, item.title),
    body: value(form, prefix + 'Body' + index, item.body),
  }));
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.redirect(new URL('/signin-with-chatgpt?return_to=%2Fadmin%2Fabout', request.url), 303);
  const form = await request.formData();
  const content: AboutContent = {
    heroTitle: value(form, 'heroTitle', defaultAboutContent.heroTitle),
    heroLead: value(form, 'heroLead', defaultAboutContent.heroLead),
    historyTitle: value(form, 'historyTitle', defaultAboutContent.historyTitle),
    historyLead: value(form, 'historyLead', defaultAboutContent.historyLead),
    history: items(form, 'history', defaultAboutContent.history),
    projectsTitle: value(form, 'projectsTitle', defaultAboutContent.projectsTitle),
    projectsLead: value(form, 'projectsLead', defaultAboutContent.projectsLead),
    projects: items(form, 'project', defaultAboutContent.projects),
    todayTitle: value(form, 'todayTitle', defaultAboutContent.todayTitle),
    todayLead: value(form, 'todayLead', defaultAboutContent.todayLead),
    todayBody: value(form, 'todayBody', defaultAboutContent.todayBody),
    vision: value(form, 'vision', defaultAboutContent.vision),
    mission: value(form, 'mission', defaultAboutContent.mission),
    values: items(form, 'value', defaultAboutContent.values),
    approachTitle: value(form, 'approachTitle', defaultAboutContent.approachTitle),
    approachLead: value(form, 'approachLead', defaultAboutContent.approachLead),
    approachBody: value(form, 'approachBody', defaultAboutContent.approachBody),
  };
  await saveAboutContent(content);
  return Response.redirect(new URL('/admin/about?saved=true', request.url), 303);
}
