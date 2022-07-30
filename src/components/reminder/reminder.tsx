import { useState } from 'react'
import { AiFillEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { RemoteChangeReminderCompletion } from '../../data/usecases/remote-change-reminder-completion'
import { convertDbDateToCommonDate } from '../../helpers/dates/convert-db-date-to-common-date'
import { Fade } from '../transitions/fade/fade'
import './reminder.css'

type Props = {
  id: string
  name: string
  date: string
  description: string
  complete: boolean
}

export function Reminder ({ id, name, date, description, complete }: Props): JSX.Element {
  const [isComplete, setIsComplete] = useState(complete)

  const toggleCompletion = async (): Promise<void> => {
    try {
      const changeReminderCompletion = new RemoteChangeReminderCompletion()
      const response = await changeReminderCompletion.update({
        id: id,
        complete: !isComplete
      })
      if (response) {
        setIsComplete(!isComplete)
      }
    } catch (error) {
      // make an error handler
    }
  }

  return (
    <div className='reminder app-default-box-shadow'>
      <div className="reminder-header">
        <div className="reminder-header-name">{name}</div>
        <div className="reminder-header-date">{convertDbDateToCommonDate(date, '/')}</div>
        <div className="reminder-header-action">
          <div onClick={toggleCompletion} className='complete-action'>
            <Fade isVisible={isComplete}>
              <AiOutlineCheck/>
            </Fade>
            <Fade isVisible={!isComplete}>
              <AiOutlineClose/>
            </Fade>
          </div>
          <AiFillEdit/>
          <AiOutlineClose/>
        </div>
      </div>
      <div className="reminder-content">{description}</div>
    </div>
  )
}