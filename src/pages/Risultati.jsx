import { useSearchParams } from 'react-router-dom'
import Thumb from '../components/Thumb'
import Lightbox, { useLightbox } from '../components/Lightbox'
import { dellAmorePhotos } from '../data/photos'

export default function Risultati() {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q')
  const lb = useLightbox(dellAmorePhotos)

  const titolo = q ? `Risultati per "${q}"` : "Risultati per \"Franco Dell'Amore\""

  return (
    <main className="container">
      <h2 className="section-title">
        {titolo}
        <span className="count">{dellAmorePhotos.length} fotografie</span>
      </h2>

      <div className="grid">
        {dellAmorePhotos.map((p) => (
          <Thumb key={p.id} photo={p} onClick={lb.open} />
        ))}
      </div>

      <Lightbox
        photos={dellAmorePhotos}
        index={lb.index}
        onClose={lb.close}
        onPrev={lb.prev}
        onNext={lb.next}
      />
    </main>
  )
}
