import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="footer-brand" href="/" aria-label="EREEP home">
          <span>
            <img src="/logo.png" alt="" />
          </span>
          <strong>
            Edmund Rice Eldoret
            <br />
            Empowerment Program
          </strong>
        </Link>
        <div className="footer-purpose">
          <p className="footer-label">Our purpose</p>
          <p>
            Empowering, liberating and transforming lives in the marginalized
            Langas community.
          </p>
          <Link href="/contact">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <span className="footer-label">Explore</span>
          <Link href="/about">About us</Link>
          <Link href="/projects">Our Impact</Link>
          <Link href="/stories">Impact stories</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} EREEP</span>
        <span>Rooted in Langas, Eldoret</span>
        <span>Community-based organisation</span>
      </div>
    </footer>
  );
}
