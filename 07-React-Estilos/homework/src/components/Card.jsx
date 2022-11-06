import React from 'react';
import styles from "../css/card.module.css"

export default function Card({name, max, min, onClose, img}) {
  
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

//esto es un cambio 