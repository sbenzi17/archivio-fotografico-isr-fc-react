import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react'

const SignaturePad = forwardRef(function SignaturePad({ width = 600, height = 200 }, ref) {
  const canvasRef = useRef(null)
  const [isEmpty, setIsEmpty] = useState(true)
  const drawing = useRef(false)
  const last = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)
    ctx.lineWidth = 1.8
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = '#1a1410'
  }, [])

  const pos = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    const t = e.touches?.[0] || e
    return { x: t.clientX - rect.left, y: t.clientY - rect.top }
  }

  const start = (e) => {
    e.preventDefault()
    drawing.current = true
    last.current = pos(e)
  }

  const move = (e) => {
    if (!drawing.current) return
    e.preventDefault()
    const p = pos(e)
    const ctx = canvasRef.current.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(last.current.x, last.current.y)
    ctx.lineTo(p.x, p.y)
    ctx.stroke()
    last.current = p
    if (isEmpty) setIsEmpty(false)
  }

  const end = () => { drawing.current = false }

  const clear = () => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr)
    setIsEmpty(true)
  }

  useImperativeHandle(ref, () => ({
    clear,
    isEmpty: () => isEmpty,
    toDataURL: () => canvasRef.current?.toDataURL('image/png') || null,
  }), [isEmpty])

  return (
    <div className="signature-pad">
      <canvas
        ref={canvasRef}
        style={{ width: `${width}px`, maxWidth: '100%', height: `${height}px`, display: 'block', cursor: 'crosshair', touchAction: 'none' }}
        onMouseDown={start}
        onMouseMove={move}
        onMouseUp={end}
        onMouseLeave={end}
        onTouchStart={start}
        onTouchMove={move}
        onTouchEnd={end}
      />
      <div className="signature-pad-toolbar">
        <span className="signature-pad-hint">{isEmpty ? 'Firma qui sopra con il mouse o con il dito' : 'Firma acquisita'}</span>
        <button type="button" className="signature-pad-clear" onClick={clear}>Pulisci</button>
      </div>
    </div>
  )
})

export default SignaturePad
