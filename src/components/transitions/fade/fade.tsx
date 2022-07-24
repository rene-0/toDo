import { Transition } from 'react-transition-group'

type Props = {
  isVisible: boolean
  duration?: number
  children: React.ReactNode
  shouldUnmount?: boolean
}
const defaultStyle = {
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
  unmounted:  { opacity: 0 }
}


export function Fade ({ isVisible, duration = 600, children, shouldUnmount = true }: Props): JSX.Element {
  return (
    <Transition in={isVisible} timeout={duration} unmountOnExit={shouldUnmount}>
      {(state) => (
        <div style={{
          ...defaultStyle,
          ...{ transition: `opacity ${duration}ms ease-in-out` },
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
  )
}