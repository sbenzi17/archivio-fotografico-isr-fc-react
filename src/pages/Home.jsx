import { useNavigate } from 'react-router-dom'
import Banner from '../components/Banner'
import Thumb from '../components/Thumb'
import Lightbox from '../components/Lightbox'
import { useLightbox } from '../components/Lightbox'
import { recentPhotos } from '../data/photos'

export default function Home() {
  const navigate = useNavigate()
  const lb = useLightbox(recentPhotos)

  const onSubmit = (e) => {
    e.preventDefault()
    const q = new FormData(e.currentTarget).get('q') || ''
    navigate(`/risultati?q=${encodeURIComponent(q)}`)
  }

  return (
    <>
      <Banner />

      <section className="hero">
        <div className="container">
          <h1><em>779</em> fotografie storiche</h1>
          <p>Cerca per autore, luogo, persona, evento o parola chiave</p>
          <form className="searchbox" onSubmit={onSubmit}>
            <input type="text" name="q" placeholder="Cerca nell'archivio…" />
            <button type="submit">Cerca</button>
          </form>
        </div>
      </section>

      <main className="container">
        <h2 className="section-title">
          Aggiunte recenti
          <span className="count">779 totali</span>
        </h2>

        <div className="grid">
          {recentPhotos.map((p) => (
            <Thumb key={p.id} photo={p} onClick={lb.open} />
          ))}
        </div>
      </main>

      <Lightbox
        photos={recentPhotos}
        index={lb.index}
        onClose={lb.close}
        onPrev={lb.prev}
        onNext={lb.next}
      />
    </>
  )
}
