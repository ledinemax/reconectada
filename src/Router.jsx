import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu' //menu
import Home from './pages/Home.jsx' //home
import Sobre from './pages/Sobre.jsx' //sobre
import Contato from './pages/Contato.jsx' //contado 
import Footer from './components/Footer.jsx' // footer
import Vagas from './pages/Vagas.jsx'


const Router = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/vagas' element={<Vagas />} />
                <Route path='/contato' element={<Contato/>}/>
            </Routes>
            <Footer content='Site desenvolvido para projeto de engajamento social.'/>
        </BrowserRouter>
    )
}

export default Router