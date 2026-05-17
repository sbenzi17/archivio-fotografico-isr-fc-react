import { Outlet, Link } from 'react-router-dom'

function Emblem() {
  return (
    <svg className="logo-emblem" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="37" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="40" cy="40" r="33" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
      <circle cx="40" cy="40" r="29" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
      <text x="40" y="50" textAnchor="middle" fontFamily="'Playfair Display', Georgia, serif" fontSize="30" fontWeight="500" fill="currentColor" letterSpacing="-1">AF</text>
      <circle cx="40" cy="14" r="1.4" fill="currentColor" />
      <circle cx="40" cy="66" r="1.4" fill="currentColor" />
      <circle cx="14" cy="40" r="1.4" fill="currentColor" />
      <circle cx="66" cy="40" r="1.4" fill="currentColor" />
    </svg>
  )
}

export default function AuthLayout() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <Link to="/" className="logo">
            <span className="logo-emblem-wrap" aria-hidden="true"><Emblem /></span>
            <span className="logo-text">
              <span className="logo-title">Archivio<br />Fotografico</span>
              <small>Istituto Storico della Resistenza<br />Forlì-Cesena</small>
            </span>
          </Link>
          <div className="header-emblem" aria-hidden="true">
            <span className="header-emblem-mark">❦</span>
            <span className="header-emblem-year">Est · 1962</span>
          </div>
          <div />
        </div>
      </header>
      <Outlet />
    </>
  )
}
