import { AiOutlinePlus, AiOutlineSearch } from 'react-icons/ai'
import { Reminder } from '../../components/reminder/reminder'
import './reminders.css'

export function Reminders (): JSX.Element {
  const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus enim, interdum a tincidunt non, semper sit amet libero. Nam id ornare purus. Ut ac lorem a erat dapibus ultricies sit amet vel purus. Praesent id porttitor orci. Nulla a ex non enim feugiat ornare. Duis efficitur rhoncus libero id rutrum. Quisque at dolor cursus, mollis mi sed, sodales ipsum. Donec porta viverra ex, quis fermentum nibh pretium ut. Suspendisse finibus dictum dignissim. Etiam rhoncus velit nec tempor pulvinar.'
  return (
    <div className='reminders'>
      <header className="app-header">
        <button className='app-default-button app-default-box-shadow'>
          <AiOutlinePlus />
        </button>
        <div className='search-container'>
          <div className='search-input-container app-default-box-shadow'>
            <input type="text" />
          </div>
          <button className='app-default-button app-default-box-shadow'>
            <AiOutlineSearch />
          </button>
        </div>
      </header>
      <section className='reminders-container'>
        <Reminder name='Todo very, very long header' date='13/03/1998' description={description} />
        <Reminder name='Todo very, very long header' date='13/03/1998' description={description} />
      </section>
    </div>
  )
}
