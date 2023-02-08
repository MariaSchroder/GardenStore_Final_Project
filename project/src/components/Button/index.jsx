import React from "react";
import s from './index.module.css'


export default function Button({ children }) {
  return (
    <button className={s.btn}>
      { children }
    </button>
  )
}
