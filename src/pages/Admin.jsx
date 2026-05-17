import { Link } from 'react-router-dom'

const rows = [
  { id: '0042', bg: 'bg-1', titolo: 'Comizio in Piazza Saffi',    autore: "Dell'Amore, Franco",   data: '1948.05.01', luogo: 'Forlì' },
  { id: '0043', bg: 'bg-2', titolo: "Festa dell'Unità",            autore: 'Mambelli, Carlo',      data: '1949.09.15', luogo: 'Cesena' },
  { id: '0044', bg: 'bg-3', titolo: 'Discorso pubblico',           autore: 'Piancastelli, Bruno',  data: '1950.04.25', luogo: 'Forlimpopoli' },
  { id: '0045', bg: 'bg-4', titolo: 'Ritratto',                    autore: "Dell'Amore, Franco",   data: '1952.06.10', luogo: 'Forlì' },
  { id: '0046', bg: 'bg-5', titolo: 'Manifestazione',              autore: 'Casadei, Pietro',      data: '1953.05.01', luogo: 'Savignano' },
  { id: '0047', bg: 'bg-6', titolo: 'Sciopero dei braccianti',     autore: 'Olivieri, Renzo',      data: '1953.07.22', luogo: 'Cesenatico' },
]

export default function Admin() {
  return (
    <main className="container">
      <div className="admin-toolbar">
        <h1>Fotografie</h1>
        <Link to="/admin/foto/nuova" className="btn">+ Nuova fotografia</Link>
      </div>

      <form style={{ marginBottom: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Cerca per titolo, autore, segnatura…"
          style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--border)', fontSize: '0.9rem' }}
        />
      </form>

      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Titolo</th>
            <th>Autore</th>
            <th>Data</th>
            <th>Luogo</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id}>
              <td><span className={`table-img thumb-img ${r.bg}`} data-label=""></span></td>
              <td>{r.id}</td>
              <td>{r.titolo}</td>
              <td>{r.autore}</td>
              <td>{r.data}</td>
              <td>{r.luogo}</td>
              <td>
                <Link to={`/admin/foto/${r.id}`} className="action">Modifica</Link>
                <a href="#" onClick={(e) => e.preventDefault()} className="action">Elimina</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p style={{ marginTop: '2rem', fontSize: '0.85rem', color: 'var(--muted)', textAlign: 'center' }}>
        Mostrando {rows.length} di 779 fotografie
      </p>
    </main>
  )
}
