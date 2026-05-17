import { useState } from 'react'
import { Link } from 'react-router-dom'

// Prototipo: envío vía formsubmit.co — servicio gratuito que reenvía POST a un email.
// La primera vez que se reciba un mensaje, mfcbbb@libero.it tendrá que confirmar
// (un email automático con un enlace de activación). Después, los mensajes llegarán directos.
// Cuando haya backend propio, se sustituye esta URL por nuestro endpoint.
const FORM_ENDPOINT = 'https://formsubmit.co/mfcbbb@libero.it'

export default function Contatto() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)
  const [sending, setSending] = useState(false)

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSending(true)
    try {
      const formData = new FormData(e.currentTarget)
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch (err) {
      setError("Errore nell'invio. Riprova fra qualche minuto o scrivici direttamente a mfcbbb@libero.it.")
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <main className="container">
        <div className="collabora-success">
          <h1>Messaggio inviato</h1>
          <p>Grazie per averci scritto. Ti risponderemo via email il prima possibile.</p>
          <p style={{ marginTop: '1.5rem' }}>
            <Link to="/">&larr; Torna alla home</Link>
          </p>
        </div>
      </main>
    )
  }

  return (
    <>
      <section className="collabora-intro container">
        <h1>Contatti</h1>
        <p>
          Hai una domanda, una segnalazione o vuoi proporci una collaborazione?
          Scrivici e ti risponderemo via email.
        </p>
      </section>

      <main className="container">
        <form className="collabora-form" onSubmit={onSubmit}>
          {/* Configurazione formsubmit.co */}
          <input type="hidden" name="_subject" value="Nuovo messaggio dall'archivio fotografico" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          {/* Honeypot anti-spam */}
          <input type="text" name="_honey" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

          <section className="form-section">
            <h2 className="form-section-title"><span>Chi sei</span></h2>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nome">Nome e cognome</label>
                <input type="text" id="nome" name="nome" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="telefono">Telefono (opzionale)</label>
              <input type="tel" id="telefono" name="telefono" placeholder="+39 333 1234567" />
            </div>
          </section>

          <section className="form-section">
            <h2 className="form-section-title"><span>Messaggio</span></h2>

            <div className="form-group">
              <label htmlFor="oggetto">Oggetto</label>
              <input type="text" id="oggetto" name="oggetto" required placeholder="Cosa vuoi chiederci?" />
            </div>

            <div className="form-group">
              <label htmlFor="messaggio">Il tuo messaggio</label>
              <textarea id="messaggio" name="messaggio" rows={6} required />
            </div>
          </section>

          {error && (
            <p style={{ color: 'var(--accent)', fontFamily: 'var(--serif)', fontStyle: 'italic', marginBottom: '1rem' }}>{error}</p>
          )}

          <div className="form-actions">
            <button type="submit" className="btn" disabled={sending}>
              {sending ? 'Invio in corso…' : 'Invia messaggio'}
            </button>
            <Link to="/" className="btn btn-secondary">Annulla</Link>
          </div>

          <p className="form-helper" style={{ marginTop: '1.25rem', textAlign: 'center' }}>
            Oppure scrivici direttamente a <a href="mailto:mfcbbb@libero.it">mfcbbb@libero.it</a>
          </p>
        </form>
      </main>
    </>
  )
}
