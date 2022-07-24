import { ChangeEvent, useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Fade } from '../../components/transitions/fade/fade'
import { Reminders } from '../../data/model/reminder-model'
import { RemoteCreateReminders } from '../../data/usecases/remote-create-reminder'
import { FormWarning } from './components/form-warning/form-warning'
import './create-reminder.css'

const emptyReminder = { name: '', description: '', complete: false, endDate: '', startDate: '', reminderCategoryId: '' }

export function CreateReminder () {
  const [reminder, setReminder] = useState<Reminders>(emptyReminder)
  const [showWarning, setShowWarning] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const defaultOnChangeHandler = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, attribute: string): void => {
    setReminder({ ...reminder, [attribute]: event.currentTarget.value })
  }

  const createReminder = async (): Promise<void> => {
    const remoteCreateReminder = new RemoteCreateReminders()
    const createdReminder = await remoteCreateReminder.create({ ...reminder, reminderCategoryId: '0' })

    if (createdReminder) {
      setIsSuccess(true)
      setShowWarning(true)
      setReminder(emptyReminder)
    } else {
      setIsSuccess(false)
      setShowWarning(true)
    }
  }

  const toggleComplete = (): void => {
    setReminder({...reminder, complete: !reminder.complete})
  }

  useEffect(() => {
    if (showWarning) {
      setTimeout(() => {
        setShowWarning(false)
      }, 3000)
    }
  }, [showWarning])

  return (
    <div className='create-reminder'>
      <div className='reminder app-default-box-shadow'>
        <div className="reminder-header">
          <input
            type="text"
            placeholder='Nome do lembrete'
            className="reminder-name-input reminder-header-name"
            value={reminder?.name}
            onChange={(event: ChangeEvent<HTMLInputElement>) => defaultOnChangeHandler(event, 'name')}
          />
          <input
            type="date"
            className='reminder-date-input reminder-header-date start'
            value={reminder?.startDate}
            onChange={(event: ChangeEvent<HTMLInputElement>) => defaultOnChangeHandler(event, 'startDate')}
          />
          <input
            type="date"
            className='reminder-date-input reminder-header-date end'
            value={reminder?.endDate}
            onChange={(event: ChangeEvent<HTMLInputElement>) => defaultOnChangeHandler(event, 'endDate')}
          />
          <div className='reminder-complete-input'>
            <Fade isVisible={reminder.complete}>
              <AiOutlineCheck className='reminder-complete-icon' onClick={toggleComplete} />
            </Fade>
            <Fade isVisible={!reminder.complete}>
              <AiOutlineClose className='reminder-complete-icon' onClick={toggleComplete} />
            </Fade>
            <input className='reminder-complete-check-box' type="checkbox" />
          </div>
        </div>
        <div className="reminder-content">
          <textarea
            name="reminder-content"
            className='reminder-content-input'
            placeholder='Descrição do lembrete'
            cols={50}
            rows={10}
            value={reminder?.description}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => defaultOnChangeHandler(event, 'description')}
          />
        </div>
      </div>
      <div className='create-reminder-buttons'>
          <Link to='../'>
            <button className="go-back app-default-button app-default-box-shadow"><AiOutlineArrowLeft /></button>
          </Link>
          <button onClick={createReminder} className="submit app-default-button app-default-box-shadow">Enviar</button>
      </div>
      <div className='form-response'>
        <Fade isVisible={showWarning}>
          <FormWarning valid={isSuccess} description={isSuccess ? 'Lembrete criado com sucesso' : 'Falha ao criar lembrete, verifique o formulário'} />
        </Fade>
      </div>
    </div>
  )
}