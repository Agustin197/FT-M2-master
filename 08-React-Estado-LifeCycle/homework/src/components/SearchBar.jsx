import React, { useState } from "react";

export default function SearchBar({onSearch}) {
 const [city, setCity] = useState("")
 
 const onChange = (evento) => {
  setCity(evento.target.value)
 }
 
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity("")
    }}>
      <input
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={(evento) => onChange(evento)}
      />
      <input type="submit" value="Agregar" />
    </form>
  );
}
