import { Outlet } from 'react-router-dom'
import './App.css'

export default function App(): JSX.Element {
  return (
    <div className="app">
      <Outlet />
    </div>
  )
}