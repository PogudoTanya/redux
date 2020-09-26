import React from 'react'
import { useSelector } from 'react-redux';
import style from "header/header.module.css";

export default function HeaderText(){
  const state = useSelector((state) => state);
  const value = state.fetchReactComponent.value;
  
return(
  <div className={style.header__text}>
    Search results for {value}
  </div>
)
}
