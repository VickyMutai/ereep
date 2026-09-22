import { getChatGPTUser } from '../../../chatgpt-auth';
import { defaultContactContent, saveContactContent, type ContactContent } from '../../../../db/contact';

function value(form: FormData, key: keyof ContactContent, fallback = '') {
  return String(form.get(key) ?? '').trim() || fallback;
}

export async function POST(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.redirect(new URL('/signin-with-chatgpt?return_to=%2Fadmin%2Fcontact', request.url), 303);
  const form = await request.formData();
  await saveContactContent({
    heroTitle: value(form, 'heroTitle', defaultContactContent.heroTitle),
    heroLead: value(form, 'heroLead', defaultContactContent.heroLead),
    formTitle: value(form, 'formTitle', defaultContactContent.formTitle),
    formLead: value(form, 'formLead', defaultContactContent.formLead),
    responseNote: value(form, 'responseNote', defaultContactContent.responseNote),
    email: value(form, 'email'),
    phone: value(form, 'phone'),
    address: value(form, 'address'),
    hours: value(form, 'hours'),
  });
  return Response.redirect(new URL('/admin/contact?saved=true', request.url), 303);
}
