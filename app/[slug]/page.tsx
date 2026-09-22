import { notFound } from 'next/navigation';

const pages: Record<string, { label: string; note: string }> = {
  about: { label: 'About Us', note: 'Our history, vision, mission, values and approach will live here.' },
  projects: { label: 'Projects', note: 'Detailed programme and community-focus pages will live here.' },
  resources: { label: 'Resources', note: 'Reports, publications, news and downloadable resources will live here.' },
  contact: { label: 'Contact', note: 'Verified contact information and an enquiry form will live here.' },
};

export default async function PlaceholderPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return <main className="placeholder-page"><a className="placeholder-brand" href="/"><img src="/logo.png" alt="EREEP" /></a><div><p className="eyebrow dark">Page by page</p><h1>{page.label}</h1><p>{page.note}</p><a className="button" href="/">Return to homepage</a></div></main>;
}
