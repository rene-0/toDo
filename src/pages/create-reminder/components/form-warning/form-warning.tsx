import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'
import './form-warning.css'

type Props = {
  description: string
  valid: boolean
}

export function FormWarning ({ valid, description }: Props): JSX.Element {
  return (
    <div className="form-warning app-default-box-shadow">
      <div className="warning-header">
        {valid && <AiOutlineCheckCircle />}
        {!valid && <AiOutlineCloseCircle />}
      </div>
      <div className="warning-description">{description}</div>
    </div>
  )
}
