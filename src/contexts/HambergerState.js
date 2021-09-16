import { createContext, useContext, useState } from "react";

const HambergerContext = createContext();
const HambergerContextProvider = HambergerContext.Provider;

function HambergerProvider({ children }) {

    const [open, setOpen] = useState(false);

    const handleHamberger = () => {
        setOpen((prevState) => !prevState);
    }

    return (
        <HambergerContextProvider value={{
            open,
            handleHamberger,
        }}>
            {children}
        </HambergerContextProvider>
    )
}

function useHamberger() {
    const all = useContext(HambergerContext);
    return all;
}

export { HambergerProvider, useHamberger };