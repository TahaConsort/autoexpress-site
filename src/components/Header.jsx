import { NAV_LINKS, OFFICIAL_SITE } from '../data/site.js'
import { asset } from '../lib/assets.js'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="logo-container" aria-label="AutoExpress Home">
          <img src={asset('logo.png')} alt="AutoExpress Logo" className="logo-img" />
        </a>

        <nav className="nav-menu">
          {NAV_LINKS.map(({ href, label }) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </nav>

        <a href={OFFICIAL_SITE} target="_blank" rel="noopener" className="cta-button">
          Visit Main Site
        </a>
      </div>
    </header>
  )
}
