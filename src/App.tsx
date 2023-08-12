
import GlobalStyle from './styles/global.styles'
import Header from './components/Header'
import AppRoutes from './components/routes'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <AppRoutes />
      <GlobalStyle />
      <Footer />
    </>
  )
}

export default App
