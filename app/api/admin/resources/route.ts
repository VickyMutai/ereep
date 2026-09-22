import { getChatGPTUser } from '../../../chatgpt-auth';
import { defaultResourcesContent, saveResourcesContent, type ResourcesContent } from '../../../../db/resources-content';

function value(form: FormData, key: string, fallback: string) {
  return String(form.get(key) ?? '').trim() || fallback;
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.redirect(new URL('/signin-with-chatgpt?return_to=%2Fadmin%2Fresources', request.url), 303);
  const form = await request.formData();
  const content: ResourcesContent = {
    heroTitle: value(form, 'heroTitle', defaultResourcesContent.heroTitle),
    heroLead: value(form, 'heroLead', defaultResourcesContent.heroLead),
    storiesTitle: value(form, 'storiesTitle', defaultResourcesContent.storiesTitle),
    storiesLead: value(form, 'storiesLead', defaultResourcesContent.storiesLead),
    stories: defaultResourcesContent.stories.map((story, index) => ({
      category: value(form, 'storyCategory' + index, story.category),
      title: value(form, 'storyTitle' + index, story.title),
      lead: value(form, 'storyLead' + index, story.lead),
      body: value(form, 'storyBody' + index, story.body),
      image: value(form, 'storyImage' + index, story.image),
    })),
    impactTitle: value(form, 'impactTitle', defaultResourcesContent.impactTitle),
    impactLead: value(form, 'impactLead', defaultResourcesContent.impactLead),
    stats: defaultResourcesContent.stats.map((stat, index) => ({
      value: value(form, 'statValue' + index, stat.value),
      label: value(form, 'statLabel' + index, stat.label),
    })),
  };
  await saveResourcesContent(content);
  return Response.redirect(new URL('/admin/resources?saved=true', request.url), 303);
}
