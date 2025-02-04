import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Skills from './components/skills'
import Profile from './components/profile'
import Projects from './components/projects'
import Footer from './components/footer'
import { LanguageProvider } from './components/languageContext'
import { ThemeProvider } from './components/ThemeContext'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <ThemeProvider>
      <LanguageProvider>
<Header />
<Skills />
<Profile />
<Projects />
<Footer />
</LanguageProvider>
</ThemeProvider>
    </div>
  )
}

export default App
