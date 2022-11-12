import { createContext } from "react"

export const ContextApp = createContext ({})

export const ContextStore = ({children}) => {


   

    return(
        <ContextApp.Provider
        value={{}}>
            {children}
        </ContextApp.Provider>
    )

}