import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div>
    <input placeholder='Ciudad...'/>
    <button onClick={props.onSearch}>Agregar</button>
  </div>
  )
};