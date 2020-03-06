import React, { createContext, useState } from 'react';

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [resetas, guardarRecetas] = useState([]);
    const [busqueda , buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    })
    return (
        <RecetasContext.Provider
            value={{

            }}
        >
            {props.children}
        </RecetasContext.Provider>
    )
}
export default RecetasProvider;