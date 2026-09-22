import { getChatGPTUser } from '../../../chatgpt-auth';
import { defaultStoriesContent, saveStoriesContent, type StoriesContent } from '../../../../db/stories-content';

function value(form: FormData, key: string, fallback: string) {
  return String(form.get(key) ?? '').trim() || fallback;
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.redirect(new URL('/signin-with-chatgpt?return_to=%2Fadmin%2Fstories', request.url), 303);
  const form = await request.formData();
  const content: StoriesContent = {
    heroTitle: value(form, 'heroTitle', defaultStoriesContent.heroTitle),
    heroLead: value(form, 'heroLead', defaultStoriesContent.heroLead),
    stories: defaultStoriesContent.stories.map((story, storyIndex) => ({
      slug: story.slug,
      category: value(form, 'storyCategory' + storyIndex, story.category),
      title: value(form, 'storyTitle' + storyIndex, story.title),
      summary: value(form, 'storySummary' + storyIndex, story.summary),
      image: value(form, 'storyImage' + storyIndex, story.image),
      imageAlt: value(form, 'storyImageAlt' + storyIndex, story.imageAlt),
      sections: story.sections.map((section, sectionIndex) => ({
        heading: value(form, 'story' + storyIndex + 'SectionHeading' + sectionIndex, section.heading),
        body: value(form, 'story' + storyIndex + 'SectionBody' + sectionIndex, section.body),
      })),
    })),
  };
  await saveStoriesContent(content);
  return Response.redirect(new URL('/admin/stories?saved=true', request.url), 303);
}
