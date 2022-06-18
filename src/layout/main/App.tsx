import React from 'react';
import './App.css';
import { AiOutlinePlus, AiOutlineSearch, AiFillEdit, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

export default function App(): JSX.Element {
  return (
    <div className="app">
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
      <section className='reminders'>
        <div className='reminder app-default-box-shadow'>
          <div className="reminder-header">
            <div className="reminder-header-name">Todo very, very long header</div>
            <div className="reminder-header-date">13/03/1998</div>
            <div className="reminder-header-action">
              <AiOutlineCheck/>
              <AiFillEdit/>
              <AiOutlineClose/>
            </div>
          </div>
          <div className="reminder-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus enim, interdum a tincidunt non, semper sit amet libero. Nam id ornare purus. Ut ac lorem a erat dapibus ultricies sit amet vel purus. Praesent id porttitor orci. Nulla a ex non enim feugiat ornare. Duis efficitur rhoncus libero id rutrum. Quisque at dolor cursus, mollis mi sed, sodales ipsum. Donec porta viverra ex, quis fermentum nibh pretium ut. Suspendisse finibus dictum dignissim. Etiam rhoncus velit nec tempor pulvinar.
          </div>
        </div>
      </section>
    </div>
  );
}