import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  return (
    <main>
      <form className="login-wrap" onSubmit={(e) => { e.preventDefault(); navigate('/admin') }}>
        <h1>Area riservata</h1>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit" className="btn btn-block">Accedi</button>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.85rem' }}>
          Non hai un account? <Link to="/registro">Registrati</Link>
        </p>
        <p style={{ textAlign: 'center', marginTop: '0.5rem', fontSize: '0.85rem' }}>
          <Link to="/">&larr; Torna al sito</Link>
        </p>
      </form>
    </main>
  )
}
