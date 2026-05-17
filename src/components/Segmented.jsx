import { useRef } from 'react'

export default function Segmented({ children, className = 'segmented' }) {
  const ref = useRef(null)

  const getInputs = () => Array.from(ref.current?.querySelectorAll('input') || [])

  const onInput = (e) => {
    const input = e.target
    if (input.inputMode === 'numeric') {
      input.value = input.value.replace(/\D/g, '')
    }
    if (input.value.length >= input.maxLength) {
      const inputs = getInputs()
      const i = inputs.indexOf(input)
      if (i >= 0 && i < inputs.length - 1) {
        inputs[i + 1].focus()
        inputs[i + 1].select()
      }
    }
  }

  const onKeyDown = (e) => {
    const input = e.target
    const inputs = getInputs()
    const i = inputs.indexOf(input)
    if (e.key === 'Backspace' && input.value === '' && i > 0) {
      const prev = inputs[i - 1]
      prev.focus()
      prev.setSelectionRange(prev.value.length, prev.value.length)
    } else if (e.key === 'ArrowLeft' && input.selectionStart === 0 && i > 0) {
      inputs[i - 1].focus()
    } else if (e.key === 'ArrowRight' && input.selectionStart === input.value.length && i < inputs.length - 1) {
      inputs[i + 1].focus()
    }
  }

  const onPaste = (e) => {
    const data = (e.clipboardData || window.clipboardData).getData('text')
    if (!data) return
    const digits = data.replace(/\D/g, '').split('')
    if (digits.length <= 1) return
    e.preventDefault()
    const inputs = getInputs()
    const i = inputs.indexOf(e.target)
    if (i < 0) return
    for (let j = 0; j < inputs.length - i && j < digits.length; j++) {
      inputs[i + j].value = digits[j]
    }
    const last = Math.min(i + digits.length, inputs.length - 1)
    inputs[last].focus()
  }

  return (
    <div ref={ref} className={className} onInput={onInput} onKeyDown={onKeyDown} onPaste={onPaste}>
      {children}
    </div>
  )
}
