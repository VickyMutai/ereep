import type { Metadata } from 'next';
import { getContactContent } from '../../db/contact';
import { SiteFooter } from '../components/SiteFooter';

export const metadata: Metadata = {
  title: 'Contact | EREEP',
  description: 'Contact the Edmund Rice Eldoret Empowerment Program team.',
};

type ContactProps = { searchParams?: Promise<{ sent?: string; error?: string }> };

export default async function ContactPage({ searchParams }: ContactProps) {
  const [content, query] = await Promise.all([getContactContent(), searchParams]);
  const contactDetails = [
    content.email && { label: 'Email', value: content.email, href: 'mailto:' + content.email },
    content.phone && { label: 'Phone', value: content.phone, href: 'tel:' + content.phone.replace(/\s/g, '') },
    content.address && { label: 'Address', value: content.address },
    content.hours && { label: 'Opening hours', value: content.hours },
  ].filter(Boolean) as { label: string; value: string; href?: string }[];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="EREEP home"><img src="/logo.png" alt="Edmund Rice Eldoret Empowerment Program" /></a>
        <nav aria-label="Primary navigation"><a href="/">Home</a><a href="/about">About Us</a><a href="/projects">Projects</a><a href="/stories">Stories</a><a href="/resources">Resources</a><a className="active" href="/contact">Contact</a></nav>
        <details className="mobile-menu"><summary aria-label="Open navigation">Menu</summary><div><a href="/">Home</a><a href="/about">About Us</a><a href="/projects">Projects</a><a href="/stories">Stories</a><a href="/resources">Resources</a></div></details>
        <a className="button button-small" href="/#donate">Donate</a>
      </header>

      <section className="contact-hero">
        <div className="contact-hero-image" aria-hidden="true" /><div className="contact-hero-overlay" />
        <div className="contact-hero-content"><p className="eyebrow">Contact us</p><h1>{content.heroTitle}</h1><p>{content.heroLead}</p></div>
      </section>

      <section className="contact-layout section">
        <div className="contact-intro"><p className="eyebrow dark">Send an enquiry</p><h2>{content.formTitle}</h2><p>{content.formLead}</p>
          {contactDetails.length > 0 && <div className="contact-details">{contactDetails.map((detail) => <article key={detail.label}><span>{detail.label}</span>{detail.href ? <a href={detail.href}>{detail.value}</a> : <p>{detail.value}</p>}</article>)}</div>}
          <small>{content.responseNote}</small>
        </div>
        <form className="contact-form" id="contact-form" action="/api/contact" method="post">
          {query?.sent === 'true' && <p className="contact-success" role="status">Thank you. Your message has been received.</p>}
          {query?.error === 'true' && <p className="contact-error" role="alert">Please check the form and try again.</p>}
          <div className="form-row"><label>Full name<input name="name" type="text" required maxLength={100} autoComplete="name" /></label><label>Email address<input name="email" type="email" required maxLength={160} autoComplete="email" /></label></div>
          <div className="form-row"><label>Phone or WhatsApp <span>Optional</span><input name="phone" type="tel" maxLength={40} autoComplete="tel" /></label><label>What is this about?<select name="subject" required defaultValue=""><option value="" disabled>Select a topic</option><option>General enquiry</option><option>Programme participation</option><option>Partnership</option><option>Volunteer</option><option>Media enquiry</option></select></label></div>
          <label>Your message<textarea name="message" rows={8} required minLength={10} maxLength={3000} /></label>
          <label className="contact-honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
          <button className="button" type="submit">Send message</button>
          <small>Your details will only be used to respond to this enquiry.</small>
        </form>
      </section>

      <SiteFooter />
    </main>
  );
}
