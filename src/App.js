import logo from './logo.svg';
import './App.css';
import Testimonio from './componentes/Testimonio.js'
function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='1'
          cargo='Ingenieria de software'
          empresa='Spotify'
          testimonio='Mm, rite of passage, classic maverick Match in the gas tank, ooh, thats wretched Unstoppable, legendary animal, mm Digital justice, now you re gonna know us Hail to the king and queen of the ruckus Yacht Money wired, no denying ' />
          <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='2'
          cargo='Ingenieria de software'
          empresa='Amazon'
          testimonio='Báilame como si fuera la última vez Y enséñame ese pasito que no sé Un besito bien suavecito, bebé  Taki taki Taki taki, rumba' />
          <Testimonio
          nombre='Sarah chima'
          pais='Nigeria'
          imagen='3'
          cargo='Ingenieria de software'
          empresa='ChatDesk'
          testimonio='Mordiendo mis labios verás Que nadie más está en mi camino Nada tiene por qué importar Déjalo atrás, estás conmigo Mordiendo mis labios verás Que nadie más está en mi camino Nada tiene por qué importar Déjalo atrás, estás conmigo' />
      </div>
    </div>
  );
}

export default App;
