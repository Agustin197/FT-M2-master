import React from 'react';
import Card from './Card';
import style from "../css/cards.module.css"

export default function Cards(props) {
  return(
    <div className={style.container}>
     {
      props.cities.map((city) =>
      <Card
      name = {city.name}
      max= {city.main.temp_max}
      min= {city.main.temp_min}
      onClose= {() => alert(city.name)}
      img = {city.weather[0].icon}
      key = {city.id}
      />
      )
     } 
    </div>
  )
};