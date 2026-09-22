import { addNewsletterSubscriber } from '../../../db/site-content';

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get('email') ?? '').trim();
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validEmail.test(email)) return Response.redirect(new URL('/?newsletter=invalid#newsletter', request.url), 303);
  await addNewsletterSubscriber(email);
  return Response.redirect(new URL('/?newsletter=success#newsletter', request.url), 303);
}
