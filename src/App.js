import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Content from './components/Content'
import Toc from './components/Toc'

function App() {
  return (
    <div>
      <Header></Header>
      <main className='container-fluid'>
        <div className='row'>
          <div className='col-lg-4'>
            <Toc></Toc>
          </div>
          <div className='col-lg-8'>
            <Content></Content>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
