export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="footer-brand" href="/" aria-label="EREEP home">
          <span>
            <img src="/logo.png" alt="" />
          </span>
          <strong>
            Edmund Rice Eldoret
            <br />
            Empowerment Program
          </strong>
        </a>
        <div className="footer-purpose">
          <p className="footer-label">Our purpose</p>
          <p>
            Empowering, liberating and transforming lives in the marginalized
            Langas community.
          </p>
          <a href="/contact">
            Start a conversation <span aria-hidden="true">→</span>
          </a>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          <span className="footer-label">Explore</span>
          <a href="/about">About us</a>
          <a href="/projects">Projects</a>
          <a href="/stories">Impact stories</a>
          <a href="/contact">Contact</a>
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
