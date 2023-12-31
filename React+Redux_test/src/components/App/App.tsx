import '../../scss/style.scss'
import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../pages/NotFound'
import { SignUp } from '../../pages/SignUp'
import { CardPartner } from '../../pages/CardPartner'
import { Main } from '../../pages/Main/Main'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/antipoff-group" element={<Main />} />
      <Route path="/users/user:id" element={<CardPartner />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
