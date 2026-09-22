import { addContactMessage } from '../../../db/contact';

function clean(form: FormData, key: string, max: number) {
  return String(form.get(key) ?? '').trim().slice(0, max);
}

export async function POST(request: Request) {
  const form = await request.formData();
  if (clean(form, 'website', 100)) return Response.redirect(new URL('/contact?sent=true', request.url), 303);
  const name = clean(form, 'name', 100);
  const email = clean(form, 'email', 160);
  const phone = clean(form, 'phone', 40);
  const subject = clean(form, 'subject', 100);
  const message = clean(form, 'message', 3000);
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !validEmail.test(email) || !subject || message.length < 10) return Response.redirect(new URL('/contact?error=true#contact-form', request.url), 303);
  await addContactMessage({ name, email, phone: phone || null, subject, message });
  return Response.redirect(new URL('/contact?sent=true#contact-form', request.url), 303);
}
