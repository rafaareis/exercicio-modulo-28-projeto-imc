import TituloNav from './components/Titulo/TituloNav'
import Significado from './components/Significado/Significado'
import Tabela from './components/Tabela/Tabela'
import Rodape from './components/Rodape/Rodape'
import Calculo from './components/Calculo/Calculo'


import './global.css'

function App() {


  return (
    <>
    <div className="container">
        <TituloNav />
        <Significado />
        <Tabela />
        <Calculo />
        <Rodape />
    </div>


    </>
  )
}

export default App
