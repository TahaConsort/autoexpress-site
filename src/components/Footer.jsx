import { FOOTER_SERVICES, OFFICIAL_SITE } from '../data/site.js'
import { asset } from '../lib/assets.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img src={asset('logo.png')} alt="AutoExpress Logo" className="footer-logo" />
          <p>
            AutoExpress is an automotive retail and service provider specializing in tyres, alloy wheels,
            and industrial vehicle solutions.
          </p>
          <p>
            <strong>Core Values:</strong> Safety, Customer Care, Professionalism
          </p>
        </div>

        <div>
          <h4 className="footer-title">Our Services</h4>
          <ul className="footer-links">
            {FOOTER_SERVICES.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="footer-title">Official Website</h4>
          <p className="footer-note">
            Visit our primary digital portal for comprehensive corporate information:
          </p>
          <a href={OFFICIAL_SITE} target="_blank" rel="noopener" className="footer-link-external">
            www.autoexpress.com.pk →
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div>AutoExpress. All rights reserved.</div>
        <div>Informative • Professional • Practical • Helpful</div>
      </div>
    </footer>
  )
}
