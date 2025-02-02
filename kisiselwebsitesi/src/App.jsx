import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/skills'
import Profile from './components/profile'
import Projects from './components/projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<Header />
<Skills />
<Profile />
<Projects />
    </div>
  )
}

export default App
