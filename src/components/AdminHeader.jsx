import { Link } from 'react-router-dom'

export default function AdminHeader() {
  return (
    <header className="admin-header">
      <div className="container">
        <div className="logo">
          Pannello di amministrazione
          <small>Archivio Fotografico</small>
        </div>
        <div>
          <Link to="/">Sito pubblico</Link>
          &nbsp;·&nbsp;
          <Link to="/login">Esci</Link>
        </div>
      </div>
    </header>
  )
}
