import AiBadge from './AiBadge.jsx'
import { INDUSTRIAL_FEATURES } from '../data/site.js'
import { asset } from '../lib/assets.js'

export default function Industrial() {
  return (
    <section id="industrial" className="section industrial-section">
      <div className="container">
        <div className="industrial-grid">
          <div className="industrial-content">
            <span className="section-subtitle">Commercial &amp; Enterprise</span>
            <h3>Industrial Vehicle &amp; Fleet Solutions</h3>
            <p>
              AutoExpress extends its technical capability beyond personal vehicles to corporate fleets
              and heavy industrial transport. We understand that fleet uptime, fuel efficiency, and road
              safety directly impact business operations.
            </p>
            <ul className="feature-list">
              {INDUSTRIAL_FEATURES.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="industrial-image-box">
            <img
              src={asset('industrial-tyres.jpg')}
              alt="Industrial Vehicle Tyre Solutions"
              className="industrial-img"
            />
            <AiBadge />
          </div>
        </div>
      </div>
    </section>
  )
}
