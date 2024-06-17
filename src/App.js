
import './App.css';
import Home from './componentes/home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ModoSlider from './componentes/modoSlider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/modoSlider' element={<ModoSlider />}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
