import type { Metadata } from "next";
import Link from "next/link";
import { getContactContent } from "../../db/contact";
import { SiteFooter } from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Contact Us | EREEP",
  description: "Contact the Edmund Rice Eldoret Empowerment Program team.",
};

export default async function ContactPage() {
  const content = await getContactContent();
  const contactDetails = [
    content.email && {
      label: "Email",
      value: content.email,
      href: "mailto:" + content.email,
    },
    content.phone && {
      label: "Director",
      value: content.phone,
      href: "tel:" + content.phone.replace(/\s/g, ""),
    },
    content.phone && {
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/254715408929",
    },
    content.address && { label: "Address", value: content.address },
    content.hours && { label: "Opening hours", value: content.hours },
  ].filter(Boolean) as { label: string; value: string; href?: string }[];

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="EREEP home">
          <img src="/logo.png" alt="Edmund Rice Eldoret Empowerment Program" />
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/projects">Our Impact</Link>
          <Link href="/stories">Stories</Link>
          <Link className="active" href="/contact">
            Contact Us
          </Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/projects">Our Impact</Link>
            <Link href="/stories">Stories</Link>
          </div>
        </details>
        <a className="button button-small" href="/#donate">
          Donate
        </a>
      </header>

      <section className="contact-hero">
        <div className="contact-hero-image" aria-hidden="true" />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <p className="eyebrow">Contact us</p>
          <h1>{content.heroTitle}</h1>
          <p>{content.heroLead}</p>
        </div>
      </section>

      <nav className="contact-tabs" aria-label="Contact page sections">
        <a href="#contact-form">Contacts</a>
        <a href="#volunteer">Volunteer</a>
        <a href="#resources">Resources</a>
      </nav>

      <section className="contact-layout section" id="contact-details">
        <div className="contact-intro">
          <p className="eyebrow dark">Send an enquiry</p>
          <h2>{content.formTitle}</h2>
          <p>{content.formLead}</p>
          {contactDetails.length > 0 && (
            <div className="contact-details">
              {contactDetails.map((detail) => (
                <article key={detail.label}>
                  <span>{detail.label}</span>
                  {detail.href ? (
                    <a href={detail.href}>{detail.value}</a>
                  ) : (
                    <p>{detail.value}</p>
                  )}
                </article>
              ))}
            </div>
          )}
          <small>{content.responseNote}</small>
        </div>
        <form
          className="contact-form"
          id="contact-form"
          action="https://formsubmit.co/edmundreep@gmail.com"
          method="post"
        >
          <input
            type="hidden"
            name="_subject"
            value="New EREEP website enquiry"
          />
          <input type="hidden" name="form" value="EREEP contact form" />
          <div className="form-row">
            <label>
              Full name
              <input
                name="name"
                type="text"
                required
                maxLength={100}
                autoComplete="name"
              />
            </label>
            <label>
              Email address
              <input
                name="email"
                type="email"
                required
                maxLength={160}
                autoComplete="email"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Phone or WhatsApp <span>Optional</span>
              <input
                name="phone"
                type="tel"
                maxLength={40}
                autoComplete="tel"
              />
            </label>
            <label>
              What is this about?
              <select name="subject" required defaultValue="">
                <option value="" disabled>
                  Select a topic
                </option>
                <option>General enquiry</option>
                <option>Programme participation</option>
                <option>Partnership</option>
                <option>Volunteer</option>
                <option>Media enquiry</option>
              </select>
            </label>
          </div>
          <label>
            Your message
            <textarea
              name="message"
              rows={8}
              required
              minLength={10}
              maxLength={3000}
            />
          </label>
          <label className="contact-honeypot" aria-hidden="true">
            Website
            <input name="_honey" type="text" tabIndex={-1} autoComplete="off" />
          </label>
          <button className="button" type="submit">
            Send message
          </button>
          <small>
            Your details will only be used to respond to this enquiry.
          </small>
        </form>
      </section>

      <section className="contact-options section">
        <article id="volunteer">
          <p className="eyebrow">Volunteer</p>
          <h2>Use your skills alongside the community.</h2>
          <p>
            Tell us about the skills, time and interests you would like to
            share.
          </p>
          <a
            className="button"
            href="mailto:edmundreep@gmail.com?subject=EREEP volunteer enquiry"
          >
            Volunteer enquiry
          </a>
        </article>
        <article id="resources">
          <p className="eyebrow">Resources</p>
          <h2>Find programme materials and updates.</h2>
          <p>
            Reports, newsletters and public resources will be published as they
            become available.
          </p>
          <a className="underlined-link" href="/#gallery">
            Explore the gallery →
          </a>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}
