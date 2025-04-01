// dentro de @ignite-ui/react/components/Toast.tsx
import React, {
  ComponentProps,
  forwardRef,
  useImperativeHandle,
  useState,
  useEffect,
} from 'react'
import { X } from 'phosphor-react'
import { ButtonToast, H1, P, ToastContainer } from './styles'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  duration?: number
}

export interface ToastHandle {
  show: () => void
  hide: () => void


}export const Toast = forwardRef<ToastHandle, ToastProps>(({ duration = 20000 }, ref) => {
  const [visible, setVisible] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  const show = () => {
    setShouldRender(true)
    setTimeout(() => setVisible(true), 10) // Dá tempo do DOM montar antes da animação
  }

  const hide = () => setVisible(false)

  useImperativeHandle(ref, () => ({ show, hide }))

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setVisible(false), duration)
      return () => clearTimeout(timer)
    } else if (shouldRender) {
      // Aguarda fim da animação para desmontar
      const timeout = setTimeout(() => setShouldRender(false), 300) // mesmo tempo do transition
      return () => clearTimeout(timeout)
    }
  }, [visible, shouldRender, duration])

  if (!shouldRender) return null

  return (
    <ToastContainer opened={visible}>
      <div>
        <H1>Agendamento realizado</H1>
        <P>Quarta-feira, 23 de Outubro às 16h</P>
      </div>
      <X size={24} onClick={hide} style={{ cursor: 'pointer' }} />
    </ToastContainer>
  )
})


Toast.displayName = 'Toast'
