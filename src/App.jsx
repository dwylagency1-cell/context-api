import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
function App() {
  const [theme, setTheme] = useState('DARK')
  
  return <div>
    <Navbar theme={theme}>
      <h4>This is a navbar</h4>
    </Navbar>
    
  </div>
}

export default App
