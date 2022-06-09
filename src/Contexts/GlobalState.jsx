import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    // Demo data
    transactions: [
        { id: 1, text: 'Backlog payment', amount: -20 },
        { id: 2, text: 'Office paid', amount: 220 },
        { id: 3, text: 'Some salary', amount: 110 },
        { id: 4, text: 'Fashion', amount: -50 },
        { id: 5, text: 'Ticketing', amount: -50 },
        { id: 6, text: 'Hotel bills', amount: 190 }
    ]
}

export const GlobalContext = createContext(initialState);

//  Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        { children }
    </GlobalContext.Provider>)
}