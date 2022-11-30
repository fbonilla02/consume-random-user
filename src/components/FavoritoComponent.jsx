

import React from 'react'

export default function FavoritoComponent({children}) {
  if(children.length === 0 ) return <h1>no tiene favorito</h1>
  {children.map(dato =>{
    <div key={dato.email}>
  <p> {dato.name.title} {dato.name.first} {dato.name.last}</p>
  <img src={dato.picture.medium}></img>
  <p>gender: {dato.gender}</p>
  <p>Email: {dato.email}</p>
  <p>Phone: {dato.cell}</p>
  </div>
  })}
}
