import React from 'react';

export default function Card(props) {
console.log(props)
return (
  <div>
<div onClick={props.onClose}>x</div>
<h3>{props.name}</h3>
<h5>min</h5>
<div>{props.min}</div>
<h5>max</h5>
<div>{props.max}</div>
<img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
  </div>
)
};





