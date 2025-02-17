import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'
import { Counter } from './Counter'
import { Settings } from './components/Settings'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Counter />} />
    <Route path="/components/Settings" element={<Settings />} />
     </Routes>
     </BrowserRouter>
      )
}

export default App
