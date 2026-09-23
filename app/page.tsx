import { getHomeContent } from '../db/site-content';
import { SiteFooter } from './components/SiteFooter';

const focusAreas = [
  { title: "Children's Alternative Education", copy: 'Learning beyond the classroom through life skills, creativity, rights education and talent discovery.', tone: 'red', icon: 'Learn' },
  { title: 'Youth Empowerment', copy: 'Mentorship, peer education and leadership opportunities that help young people make positive choices.', tone: 'blue', icon: 'Lead' },
  { title: 'Gender Equality', copy: 'Safe spaces, knowledge and shared action that help girls and boys build healthier, more equal futures.', tone: 'gold', icon: 'Equal' },
  { title: 'Environmental Care', copy: 'Practical learning and community action around sanitation, waste, trees and climate awareness.', tone: 'green', icon: 'Care' },
  { title: 'Disability Inclusion', copy: 'Promoting dignity, participation and opportunity for persons with disabilities and their caregivers.', tone: 'violet', icon: 'Include' },
  { title: 'Sustainable Livelihoods', copy: 'Skills, savings and income opportunities that strengthen confidence, choice and resilience.', tone: 'red', icon: 'Grow' },
  { title: 'Human Rights Advocacy', copy: 'Building the knowledge, voice and agency people need to claim, defend and promote their rights.', tone: 'blue', icon: 'Speak' },
  { title: 'Community Engagement', copy: 'Bringing families, schools and local leaders together to shape practical, lasting solutions.', tone: 'gold', icon: 'Together' },
];

export default async function Home() {
  const content = await getHomeContent();

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="EREEP home"><img src="/logo.png" alt="Edmund Rice Eldoret Empowerment Program" /></a>
        <nav aria-label="Primary navigation">
          <a className="active" href="#top">Home</a><a href="/about">About Us</a><a href="/projects">Projects</a><a href="/stories">Stories</a><a href="/resources">Resources</a><a href="/contact">Contact</a>
        </nav>
        <details className="mobile-menu"><summary aria-label="Open navigation">Menu</summary><div><a href="/about">About Us</a><a href="/projects">Projects</a><a href="/stories">Stories</a><a href="/resources">Resources</a><a href="/contact">Contact</a></div></details>
        <a className="button button-small" href="#donate">Donate</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" /><div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Edmund Rice Eldoret Empowerment Program</p>
          <h1>{content.heroTitle}</h1>
          <p className="hero-copy">{content.heroBody}</p>
          <div className="hero-actions"><a className="button" href="#focus">Explore our work</a><a className="text-link" href="#about">Who we are <span aria-hidden="true">→</span></a></div>
        </div>
        <div className="hero-note"><strong>Rooted in Langas</strong><span>Working alongside communities in Eldoret, Kenya.</span></div>
      </section>

      <section className="intro section" id="about">
        <div><p className="eyebrow dark">Who we are</p><h2>{content.introTitle}</h2></div>
        <div className="intro-copy"><p>{content.introBodyOne}</p><p>{content.introBodyTwo}</p><a className="underlined-link" href="/about">Discover our story →</a></div>
      </section>

      <section className="focus section" id="focus">
        <div className="section-heading"><div><p className="eyebrow dark">Our community focus</p><h2>Different challenges need different solutions.</h2></div><p>Our focus areas provide practical spaces for learning, participation, advocacy, skills development and action.</p></div>
        <div className="focus-grid">
          {focusAreas.map((area, index) => <a className={`focus-card ${area.tone}`} href="/projects" key={area.title}><span className="card-number">0{index + 1} · {area.icon}</span><h3>{area.title}</h3><p>{area.copy}</p><span className="card-arrow" aria-hidden="true">↗</span></a>)}
        </div>
      </section>

      <section className="belief section">
        <div className="belief-photo" role="img" aria-label="Young people learning together" />
        <div className="belief-content"><p className="eyebrow">What we believe</p><h2>Work alongside communities, not simply for them.</h2><p>Meaningful and lasting change begins when people have the knowledge, confidence, opportunities and support to realise their potential and participate in decisions that affect their lives.</p><div className="belief-values"><span>Dignity</span><span>Inclusion</span><span>Participation</span><span>Transformation</span></div></div>
      </section>

      <section className="take-action section" id="donate">
        <div><p className="eyebrow dark">Take action</p><h2>Help create room for people to learn, lead and thrive.</h2></div>
        <div className="action-cards"><article><span>01</span><h3>Support our work</h3><p>Your contribution can help strengthen learning, inclusion and opportunity in Langas.</p><span className="muted-button" aria-disabled="true">Donations coming soon</span></article><article><span>02</span><h3>Stay connected</h3><p>Join the temporary mailing list for programme news, stories and ways to participate.</p><a href="#newsletter">Join the newsletter →</a></article></div>
      </section>

      <section className="newsletter section" id="newsletter">
        <div><p className="eyebrow">Stay in the loop</p><h2>{content.newsletterTitle}</h2><p>{content.newsletterBody}</p></div>
        <form action="https://formsubmit.co/vicky.mutai96@gmail.com" method="post"><input type="hidden" name="_subject" value="New EREEP newsletter signup" /><input type="hidden" name="form" value="EREEP newsletter" /><input className="contact-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" /><label htmlFor="email">Email address</label><div><input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" /><button type="submit">Subscribe</button></div><small>Signup details are sent securely to the EREEP team by email.</small></form>
      </section>

      <SiteFooter />
    </main>
  );
}
