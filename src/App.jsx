import { useEffect, useState } from "react"
import FavoritoComponent from "./components/FavoritoComponent"
import { user } from "./context/userContext"



function App() {
  const {usuario, getData } = user()
  const [favorito, setFavorito] = useState([])

  useEffect(()=>{
    getData()
  },[])
  const saveFav= (person) =>{
    if(favorito.length === 0){
      setFavorito(person)
      console.log("no hay nada");
    }else{
      setFavorito([...favorito, person])
    }
  }
  

  console.log(favorito);
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
     <button onClick={()=>{saveFav(usuario)}}>Favorito</button>
     <section>
     <FavoritoComponent>
     {favorito}
     </FavoritoComponent>
     </section>
    </>
  )
}

export default App
