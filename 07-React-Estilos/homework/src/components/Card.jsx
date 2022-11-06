import React from 'react';
import styles from "../css/card.module.css"

export default function Card({name, max, min, onClose, img}) {
  // acá va tu código
  return (
    <div className={styles.container}>
      <div className={styles.containerName}>
        <button className={styles.btn} onClick={onClose}>x</button>
        <h4>{name}</h4>
      </div>
      <p>Min: {min}°</p>
      <p>Max: {max}°</p>
      <img className={styles.img} src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="img not found" />
    </div>
  )
};
//   return (
   
//    <div className={styles.container}> 
//      <div onClick={onClose}>x</div>
//      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="pic" />
//      <h1>{name}</h1>
//      <h4>max</h4>
//      <div>{max}</div>
//      <h4>min</h4>
//      <div>{min}</div>
     
//    </div>
//  )