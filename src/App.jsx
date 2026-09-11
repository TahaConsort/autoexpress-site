import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import CoreValues from './components/CoreValues.jsx'
import Services from './components/Services.jsx'
import Industrial from './components/Industrial.jsx'
import Facility from './components/Facility.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="angular-divider" />
        <CoreValues />
        <Services />
        <Industrial />
        <Facility />
      </main>
      <Footer />
    </>
  )
}
