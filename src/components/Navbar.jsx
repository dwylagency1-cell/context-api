import { useContext } from 'react'
import Nav2 from './nav2.jsx'
import { themeDataContext } from '../context/themeContext.jsx'
function Navbar(props) {

    const data = useContext(themeDataContext)
    return <div >
        <div className="nav">
            <div className='div1'>
                <h2>{data}</h2>
            </div>
            {props.children}
            <Nav2 theme={props.theme}></Nav2>
            
        </div>
    </div>
    
}
export default Navbar