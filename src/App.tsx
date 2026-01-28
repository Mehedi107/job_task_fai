import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import { DataContextProvider } from './context/dataContext'

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <DataContextProvider>
      <div className="grid grid-cols-12 min-h-screen ">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* right side content */}
        <div className="col-span-10 flex flex-col bg-primary">
          <Header activeTab={activeTab}></Header>
          <MainContent activeTab={activeTab}></MainContent>
          
        </div>
      </div>
    </DataContextProvider>
  )
}

export default App
