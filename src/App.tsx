import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Sidebar from './components/sidebar'

function App() {

  return (
    <div className="grid grid-cols-12 min-h-screen ">
      <Sidebar></Sidebar>

      {/* right side content */}
      <div className="col-span-10 flex flex-col bg-primary">
        <Header></Header>
        <MainContent></MainContent>
        
      </div>
    </div>
  )
}

export default App
