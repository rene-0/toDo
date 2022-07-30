import React, { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Reminder } from '../../components/reminder/reminder'
import { SearchReminders } from '../../data/interfaces/search-reminders-interface'
import { RemoteSearchReminders } from '../../data/usecases/remote-search-reminders'
import { NoData } from './components/no-data/no-data'
import './reminders.css'

export function Reminders (): JSX.Element {
  const [reminders, setReminders] = useState<SearchReminders.Model>([])
  const [searchValue, setSearchValue] = useState<string>()

  const loadReminder = async (): Promise<void> => {
    const remoteSearchReminders = new RemoteSearchReminders()
    const reminders = await remoteSearchReminders.load({})
    
    setReminders(reminders)
  }

  const searchReminders = async (): Promise<void> => {
    const remoteSearchReminders = new RemoteSearchReminders()
    const reminders = await remoteSearchReminders.load({
      ...(searchValue && { name: searchValue })
    })
    
    setReminders(reminders)
  }

  const memorizedReminders = useMemo(() => {
    if (reminders.length <= 0) {
      return <NoData />
    }
    return reminders.map((reminder, index) => (
      <Reminder
        key={`reminders-${index}`}
        id={reminder.id}
        name={reminder.name}
        date={reminder.endDate}
        description={reminder.description}
        complete={reminder.complete}
      />
    ))
  }, [reminders])

  useEffect(() => {
    loadReminder()
  }, [])

  return (
    <div className='reminders'>
      <header className="app-header">
        <Link to='./create'>
        <button className='app-default-button app-default-box-shadow'>
          <AiOutlinePlus />
        </button>
        </Link>
        <div className='search-container'>
          <div className='search-input-container app-default-box-shadow'>
            <input
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => { if (event.key === 'Enter') { searchReminders() } }}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setSearchValue(event.currentTarget.value)} type="text"
            />
          </div>
          <button onClick={searchReminders} className='app-default-button app-default-box-shadow'>
            <AiOutlineSearch />
          </button>
        </div>
      </header>
      <section className='reminders-container'>
        {memorizedReminders}
      </section>
    </div>
  )
}
