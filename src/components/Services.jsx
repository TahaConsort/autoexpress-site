import SectionHeader from './SectionHeader.jsx'
import AiBadge from './AiBadge.jsx'
import { SERVICES } from '../data/site.js'
import { asset } from '../lib/assets.js'

export default function Services() {
  return (
    <section id="services" className="section section-light">
      <div className="container">
        <SectionHeader subtitle="Our Services" title="Comprehensive Tyre & Wheel Solutions" />

        <div className="services-grid">
          {SERVICES.map((service) => (
            <article className="service-card" key={service.id}>
              <div className="service-image-wrapper">
                <img src={asset(service.image)} alt={service.alt} className="service-img" />
                <span className="service-badge">{service.badge}</span>
                {service.aiGenerated && <AiBadge />}
              </div>
              <div className="service-content">
                <h3 className="service-name">{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-footer">
                  <span className="service-spec">{service.spec}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
