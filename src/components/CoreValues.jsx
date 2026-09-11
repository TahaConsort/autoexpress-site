import SectionHeader from './SectionHeader.jsx'
import { CORE_VALUES } from '../data/site.js'
import { asset } from '../lib/assets.js'

export default function CoreValues() {
  return (
    <section id="why-us" className="section section-dark">
      <div className="container">
        <SectionHeader subtitle="Core Values & Precision" title="Driven By Excellence" />

        <div className="values-grid">
          {CORE_VALUES.map(({ icon, title, description }) => (
            <div className="value-card" key={title}>
              <div className="value-icon">{icon}</div>
              <h3 className="value-title">{title}</h3>
              <p className="value-desc">{description}</p>
            </div>
          ))}
        </div>

        <div className="banner-showcase">
          <img
            src={asset('why-us-banner.jpg')}
            alt="Why Buy From Us Graphic Banner showcasing Audi vehicle and wheel points"
            className="banner-img"
          />
        </div>
      </div>
    </section>
  )
}
