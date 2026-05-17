import { Link } from 'react-router-dom'

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="11" width="16" height="10" rx="1" />
      <path d="M8 11V7a4 4 0 1 1 8 0v4" />
    </svg>
  )
}

function Emblem() {
  return (
    <svg className="logo-emblem" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="40" cy="40" r="37" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="40" cy="40" r="33" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.45" />
      <circle cx="40" cy="40" r="29" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
      <text
        x="40" y="50"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="30"
        fontWeight="500"
        fill="currentColor"
        letterSpacing="-1"
      >AF</text>
      <circle cx="40" cy="14" r="1.4" fill="currentColor" />
      <circle cx="40" cy="66" r="1.4" fill="currentColor" />
      <circle cx="14" cy="40" r="1.4" fill="currentColor" />
      <circle cx="66" cy="40" r="1.4" fill="currentColor" />
    </svg>
  )
}

export default function Header() {
  return (
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

        <div className="header-actions">
          <Link to="/login">
            <LockIcon /> Area riservata
          </Link>
        </div>
      </div>
    </header>
  )
}
