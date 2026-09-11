import SectionHeader from './SectionHeader.jsx'
import { FACILITY_HIGHLIGHTS } from '../data/site.js'
import { asset } from '../lib/assets.js'

export default function Facility() {
  return (
    <section id="facility" className="section section-dark">
      <div className="container">
        <SectionHeader subtitle="State-Of-The-Art Bay" title="Our Service Centre" />

        <div className="facility-grid">
          <div className="facility-img-wrapper">
            <img
              src={asset('facility.jpg')}
              alt="AutoExpress Service Bay Storefront at Night"
              className="facility-img"
            />
          </div>

          <div className="facility-details">
            <h3>Illuminated Workshop &amp; Stockyard</h3>
            <p>
              Equipped with hydraulic vehicle lifts, precision alignment racks, and inventory containing
              new tyres from leading global brands. Our facility is designed for efficient turnaround
              times without sacrificing safety standards.
            </p>

            <div className="facility-highlights">
              {FACILITY_HIGHLIGHTS.map(({ title, detail }) => (
                <div className="highlight-box" key={title}>
                  <h4>{title}</h4>
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
