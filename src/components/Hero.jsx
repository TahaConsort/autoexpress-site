import { HERO_STATS } from '../data/site.js'
import { asset } from '../lib/assets.js'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img src={asset('hero-banner.jpg')} alt="AutoExpress Tyre Tread Banner" className="hero-bg-img" />
      </div>
      <div className="hero-overlay" />

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">Automotive Retail &amp; Service Provider</span>
          <h1 className="hero-title">
            Complete Tyre, Alloy Wheel &amp; <span>Mobile Fitting</span>
          </h1>
          <p className="hero-tagline">
            Complete tyre, alloy wheel, and mobile fitting services for every drive.
          </p>
          <p className="hero-description">
            AutoExpress provides professional on-site and mobile fitting services, including precision
            wheel alignment, balancing, and nitrogen inflation for retail customers and corporate fleets.
          </p>

          <div className="hero-stats">
            {HERO_STATS.map(({ title, detail }) => (
              <div className="stat-item" key={title}>
                <h3>{title}</h3>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-media">
          <img
            src={asset('hero-card.png')}
            alt="Red Honda Civic RS on display showcasing high performance alloy wheels and tyres"
            className="hero-card-img"
          />
        </div>
      </div>
    </section>
  )
}
