import React from 'react';
import Card from './Card';

export default function Cards(props) {

return (
  <div>
    {
      props.cities.map( (city) =>
      <Card
      name = {city.name}
      max= {city.main.temp_max}
      min= {city.main.temp_min}
      onClose= {() => alert(city.name)}
      img= {city.weather[0].icon}
      //hace falta una key
      key = {city.id}
      />
      )
    }
  </div>
)
};