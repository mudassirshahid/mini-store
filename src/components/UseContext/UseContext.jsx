// Based on three steps:
// create context
// Provider
// useContext
// children = our whole app component

import { createContext, useContext } from "react"

const AppContext = createContext();

const AppProvider = ({children}) => {
    const userData = {
        name: "Mudassir",
        email: "mudassirshahid84@gmail.com"
    };

    const students = [
        {
            name: "Mudassir",
            rollNo: 1,
            email: "mudassirshahid84@gmail.com"
        },
        {
            name: "Mudassir",
            rollNo: 2,
            email: "mudassirshahid74@gmail.com"
        },
        {
            name: "Mudassir",
            rollNo: 3,
            email: "mudassirshahid64@gmail.com"
        },

    ];

    // Combine userData and students into one object
    // const contextValue = {
    //     userData,
    //     students
    // };

    //With above combine method
    // return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    //without objects combine method
    return <AppContext.Provider value={{userData, students}}>{children}</AppContext.Provider>
}

// Custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
  };
  
  export { AppContext, AppProvider, useGlobalContext };