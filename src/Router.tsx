import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './layout/main/App'
import { CreateReminder } from './pages/create-reminder/create-reminder'
import { Reminders } from './pages/reminders/reminders'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Reminders />} />
          <Route path="/create" element={<CreateReminder />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
