import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPhotoDetail } from '../data/photos'

export default function AdminEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const photo = id === 'nuova' ? {
    id: '—', bg: 'bg-1', label: 'Nuova',
    titolo: '', autore: '', data: '', citta: '', luogo: '', evento: '', fondo: '', segnatura: '',
    persone: [], formazione: [], parole: [], note: '',
  } : getPhotoDetail(id)

  const toCSV = (arr) => Array.isArray(arr) ? arr.join(', ') : (arr || '')

  return (
    <main className="container">
      <div className="admin-toolbar">
        <h1>{id === 'nuova' ? 'Nuova fotografia' : `Modifica fotografia · ${photo.id}`}</h1>
        <Link to="/admin" className="btn btn-secondary">&larr; Indietro</Link>
      </div>

      <form className="detail" onSubmit={(e) => { e.preventDefault(); navigate('/admin') }}>
        <div>
          <div className={`detail-img thumb-img ${photo.bg}`} data-label={photo.id}></div>
          <div className="form-group" style={{ marginTop: '1rem' }}>
            <label htmlFor="file">Sostituisci immagine</label>
            <input type="file" id="file" />
          </div>
        </div>

        <div className="detail-meta">
          <div className="form-group">
            <label htmlFor="titolo">Titolo</label>
            <input type="text" id="titolo" defaultValue={photo.titolo} />
          </div>

          <div className="form-group">
            <label htmlFor="autore">Autore</label>
            <input type="text" id="autore" defaultValue={photo.autore} />
          </div>

          <div className="form-group">
            <label htmlFor="data">Data</label>
            <input type="text" id="data" defaultValue={photo.data} />
          </div>

          <div className="form-group">
            <label htmlFor="citta">Città</label>
            <input type="text" id="citta" defaultValue={photo.citta} />
          </div>

          <div className="form-group">
            <label htmlFor="luogo">Luogo</label>
            <input type="text" id="luogo" defaultValue={photo.luogo} />
          </div>

          <div className="form-group">
            <label htmlFor="evento">Evento</label>
            <input type="text" id="evento" defaultValue={photo.evento} />
          </div>

          <div className="form-group">
            <label htmlFor="fondo">Fondo</label>
            <input type="text" id="fondo" defaultValue={photo.fondo} />
          </div>

          <div className="form-group">
            <label htmlFor="segnatura">Segnatura</label>
            <input type="text" id="segnatura" defaultValue={photo.segnatura} />
          </div>

          <div className="form-group">
            <label htmlFor="persone">Persone (separate da virgola)</label>
            <input type="text" id="persone" defaultValue={toCSV(photo.persone)} />
          </div>

          <div className="form-group">
            <label htmlFor="formazione">Formazione politica</label>
            <input type="text" id="formazione" defaultValue={toCSV(photo.formazione)} />
          </div>

          <div className="form-group">
            <label htmlFor="parole">Parole chiave</label>
            <input type="text" id="parole" defaultValue={toCSV(photo.parole)} />
          </div>

          <div className="form-group">
            <label htmlFor="note">Note</label>
            <textarea id="note" rows={4} defaultValue={photo.note} />
          </div>

          <button type="submit" className="btn">Salva modifiche</button>
          &nbsp;
          <Link to="/admin" className="btn btn-secondary">Annulla</Link>
        </div>
      </form>
    </main>
  )
}
