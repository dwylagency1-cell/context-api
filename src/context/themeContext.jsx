import { createContext } from "react"
export const themeDataContext = createContext()

function ThemeContext(props) {
    
    return <div>
        <themeDataContext.Provider value = 'Dekiru'>
            {props.children}
        </themeDataContext.Provider>

    </div>
}
export default ThemeContext