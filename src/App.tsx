import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import GlobalStyle from './styles/global.styles'
import Header from './components/Header'
import AppRoutes from './components/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AppRoutes />
      <GlobalStyle />
    </>
  )
}

export default App
