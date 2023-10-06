import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

// import './global.css'
import { ThemeProvider } from 'styled-components'
import EstiloGlobal from './styles'
import Cores from './components/Variaveis'

function App() {
  return (
    <ThemeProvider theme={Cores}>
      <EstiloGlobal></EstiloGlobal>
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
