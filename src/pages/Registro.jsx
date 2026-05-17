import { Link, useNavigate } from 'react-router-dom'
import Segmented from '../components/Segmented'

export default function Registro() {
  const navigate = useNavigate()

  return (
    <main>
      <form className="login-wrap" autoComplete="off" onSubmit={(e) => { e.preventDefault(); navigate('/admin') }}>
        <h1>Registrazione</h1>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div className="form-group">
            <label htmlFor="cognome">Cognome</label>
            <input type="text" id="cognome" name="cognome" required />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label>Data di nascita</label>
          <Segmented>
            <input type="text" inputMode="numeric" className="seg-2" maxLength={2} placeholder="GG" aria-label="Giorno" />
            <span className="seg-sep">/</span>
            <input type="text" inputMode="numeric" className="seg-2" maxLength={2} placeholder="MM" aria-label="Mese" />
            <span className="seg-sep">/</span>
            <input type="text" inputMode="numeric" className="seg-4" maxLength={4} placeholder="AAAA" aria-label="Anno" />
          </Segmented>
        </div>

        <div className="form-group">
          <label>Telefono</label>
          <Segmented>
            <input type="text" inputMode="numeric" className="seg-3" maxLength={3} placeholder="+39" aria-label="Prefisso" />
            <input type="text" inputMode="numeric" className="seg-3" maxLength={3} placeholder="333" aria-label="Operatore" />
            <input type="text" inputMode="numeric" maxLength={7} placeholder="1234567" aria-label="Numero" style={{ flex: 1 }} />
          </Segmented>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-group">
          <label>Codice di verifica</label>
          <Segmented className="otp">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <input key={n} type="text" inputMode="numeric" maxLength={1} aria-label={`Cifra ${n}`} />
            ))}
          </Segmented>
          <p className="muted-text">Inserisci il codice ricevuto via email</p>
        </div>

        <button type="submit" className="btn btn-block">Registrati</button>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem' }}>
          Hai già un account? <Link to="/login">Accedi</Link>
        </p>
      </form>
    </main>
  )
}
