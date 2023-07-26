import  {createContext} from "react";

export const DarkModeContext = createContext();

/*export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode]= useState(false);

    return (
        <DarkModeProvider.Provider value={{darkMode, setDarkMode}}>
            {children}
        </DarkModeProvider.Provider>
    );
};*/