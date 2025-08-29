import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Error from './routes/Error'
import Home from './routes/Home'
import Cliente from './routes/Cliente'

function App() {

  return (
    // Habilita a navegação por rotas na aplicação
    <BrowserRouter>
    {/* Chamando o componente nav, componente é sempre auto-close*/}
    <Nav/>
    <main>
      {/* Gerencia a exibição dos componentes com base na url */}
      <Routes>
        {/* Rota pra chamar urls não encontradas*/}
        <Route path='*' element={<Error/>}/>

        {/* Rota para chamar o Home*/}
        <Route path='/' element={<Home/>}/>

        {/* Rota para chamar o Cliente*/}
        <Route path='/cliente' element={<Cliente/>}/>
      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
