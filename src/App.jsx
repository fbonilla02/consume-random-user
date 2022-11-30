import { useEffect } from "react"

import { user } from "./context/userContext"


function App() {
  const {usuario, getData, favorite} = user()

  useEffect(()=>{
    getData()
  },[])


  console.log(usuario);
  return (
    <>
     {usuario.map(data =>
      <div key={usuario.email}>
      <p> {data.name.title} {data.name.first} {data.name.last}</p>
      <img src={data.picture.medium}></img>
      <p>gender: {data.gender}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.cell}</p>
      </div>
     )}
     <button onClick={()=>{getData()}}>Generar</button>
     <button onClick={()=>{favorite(usuario)}}>Favorito</button>
    </>
  )
}

export default App
