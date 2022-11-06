import React from 'react';
import styles from "../css/search.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div className={styles.container}>
      <input placeholder='Ciudad...' />
      <button className={styles.btn} onClick={props.onSearch}>Agregar</button>
    </div>
  )
};