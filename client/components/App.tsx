import Shows from './Shows'
import P5TestSketch from './Boxes'
import './App.css'

function App() {
  return (
    <>
      <header className="header">
        <h1>Raadeo</h1>
      </header>
      <section className="main">
        <Shows />
        <div className="container">
          <div className="sketch">
            <P5TestSketch />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
