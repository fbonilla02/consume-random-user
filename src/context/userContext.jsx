import React, { createContext, useContext, useState } from 'react'
import { getApi } from '../api/getApi';


export const UserContext = createContext();

export const user = () =>{
    const context = useContext(UserContext)
    if (!context){
        throw new Error("user must be used within a TaskContextProvider")
    }
    return context;
}


export default function UserContextProvider({children}) {
    const [usuario, setUsuario] = useState([])

    const getData = async() =>{
        const response = await getApi()
        setUsuario(response)
    }

    const favorite = (value)=>{
        console.log("xd:", value);
        const personFav = []
        if(personFav.length === 0){
            personFav.push(value)
            localStorage.setItem('favorito', JSON.stringify(personFav));
        }else{
            personFav.push(...personFav, value)
            localStorage.setItem('favorito', JSON.stringify(personFav));
        }
        
    }
  return (
    <UserContext.Provider value={{usuario, getData, favorite}}>
        {children}
    </UserContext.Provider>
  )
}
