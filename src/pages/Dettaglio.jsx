import { Link, useParams } from 'react-router-dom'
import { getPhotoDetail } from '../data/photos'

export default function Dettaglio() {
  const { id } = useParams()
  const photo = getPhotoDetail(id)

  return (
    <main className="container">
      <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
        <Link to="/risultati">&larr; Torna ai risultati</Link>
      </p>

      <article className="detail">
        <div className={`detail-img thumb-img ${photo.bg}`} data-label={photo.label}></div>

        <div className="detail-meta">
          <h2>{photo.titolo}</h2>
          <p className="detail-subtitle">{photo.subtitle}</p>

          <dl>
            <dt>Identificativo</dt>
            <dd>{photo.id}</dd>

            <dt>Autore</dt>
            <dd><Link to={`/risultati?campo=autore&q=${encodeURIComponent(photo.autore)}`}>{photo.autore}</Link></dd>

            <dt>Data</dt>
            <dd>{photo.data}</dd>

            <dt>Luogo</dt>
            <dd>{photo.luogo}</dd>

            <dt>Città</dt>
            <dd><Link to={`/risultati?campo=luogo&q=${encodeURIComponent(photo.citta)}`}>{photo.citta}</Link></dd>

            <dt>Evento</dt>
            <dd>{photo.evento}</dd>

            <dt>Fondo</dt>
            <dd>{photo.fondo}</dd>

            <dt>Serie</dt>
            <dd>{photo.serie}</dd>

            <dt>Segnatura</dt>
            <dd>{photo.segnatura}</dd>

            <dt>Tipologia</dt>
            <dd>{photo.tipologia}</dd>

            <dt>Supporto</dt>
            <dd>{photo.supporto}</dd>

            <dt>Dimensioni</dt>
            <dd>{photo.dimensioni}</dd>

            <dt>Orientamento</dt>
            <dd>{photo.orientamento}</dd>

            <dt>Colore</dt>
            <dd>{photo.colore}</dd>

            <dt>Persone</dt>
            <dd>
              {photo.persone.map((p) => (
                <Link key={p} to={`/risultati?campo=persone&q=${encodeURIComponent(p)}`} className="tag">{p}</Link>
              ))}
            </dd>

            <dt>Formazione politica</dt>
            <dd>
              {photo.formazione.map((f) => (
                <Link key={f} to={`/risultati?campo=formazione&q=${encodeURIComponent(f)}`} className="tag">{f}</Link>
              ))}
            </dd>

            <dt>Parole chiave</dt>
            <dd>
              {photo.parole.map((p) => (
                <Link key={p} to={`/risultati?campo=parole&q=${encodeURIComponent(p)}`} className="tag">{p}</Link>
              ))}
            </dd>

            <dt>Note</dt>
            <dd>{photo.note}</dd>
          </dl>
        </div>
      </article>
    </main>
  )
}
