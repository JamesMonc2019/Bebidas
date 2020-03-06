import React, {createContext, useState, useEffect} from 'react';  
import axios from 'axios';

//crear el context
export const CategoriasContext = createContext();

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {
    //Crear el state del Contex
    //const [ hola, guardarHola ] = useState('hola desde state');
    const [categorias, guardarCategorias] = useState([]);

    //Ejecutar el llamado ala API
    useEffect (() => {
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
            const categorias = await axios(url);
            guardarCategorias(categorias.data.drinks);
        }
        obtenerCategorias();
    },[]);

    return(
        <CategoriasContext.Provider
            value={{
                categorias
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}
export default CategoriasProvider;
