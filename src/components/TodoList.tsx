import React from 'react'
import trash from "../images/trash.svg";

function Todolist(props:any) {
  return (
    <li className="list-group-item d-flex justify-content-between">
        <span>{props.item}</span>
        <img src={trash} className="delete-me" onClick={e=>{ props.deleteItem(props.index) }} alt="delete"/>
    </li>
  )
}

export default Todolist