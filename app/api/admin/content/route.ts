import { getChatGPTUser } from '../../../chatgpt-auth';
import { defaultHomeContent, saveHomeContent, type HomeContent } from '../../../../db/site-content';

function text(form: FormData, key: keyof HomeContent) {
  const value = String(form.get(key) ?? '').trim();
  return value || defaultHomeContent[key];
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.redirect(new URL('/signin-with-chatgpt?return_to=%2Fadmin', request.url), 303);
  const form = await request.formData();
  await saveHomeContent({
    heroTitle: text(form, 'heroTitle'), heroBody: text(form, 'heroBody'),
    introTitle: text(form, 'introTitle'), introBodyOne: text(form, 'introBodyOne'), introBodyTwo: text(form, 'introBodyTwo'),
    newsletterTitle: text(form, 'newsletterTitle'), newsletterBody: text(form, 'newsletterBody'),
  });
  return Response.redirect(new URL('/admin?saved=true', request.url), 303);
}
