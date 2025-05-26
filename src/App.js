import './App.css';
import logoLuis from './img/logo-luis-developer.png';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className='app-tareas'>
        <div className='logo-container'>
          <img 
            src={logoLuis} 
            className='logo-luis' 
          />
        </div>

        <div className='lista-tareas'>
          <h1>Mis Tareas</h1>
          <ListaTareas />
        </div>

        <div className='copyright'>
          <a href='https://github.com/LuisChicaizaDev' target="_blank" rel="noopener noreferrer">
            Hecho por: LuisChicaizaDev
          </a>
        </div>
    </div>
  );
}

export default App;
