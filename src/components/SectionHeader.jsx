export default function SectionHeader({ subtitle, title }) {
  return (
    <div className="section-header">
      <span className="section-subtitle">{subtitle}</span>
      <h2 className="section-title">{title}</h2>
    </div>
  )
}
