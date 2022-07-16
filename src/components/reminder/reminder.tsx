import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { convertDbDateToCommonDate } from '../../helpers/dates/convert-db-date-to-common-date'
import './reminder.css'

type Props = {
  name: string
  date: string
  description: string 
}

export function Reminder ({ name, date, description }: Props): JSX.Element {
  return (
    <div className='reminder app-default-box-shadow'>
      <div className="reminder-header">
        <div className="reminder-header-name">{name}</div>
        <div className="reminder-header-date">{convertDbDateToCommonDate(date, '/')}</div>
        <div className="reminder-header-action">
          <AiOutlineCheck/>
          <AiFillEdit/>
          <AiOutlineClose/>
        </div>
      </div>
      <div className="reminder-content">{description}</div>
    </div>
  )
}