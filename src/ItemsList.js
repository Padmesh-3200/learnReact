import React from 'react'
import Item from "./Item"
const ItemsList = ({items,handleCheck,handleDelete}) => {
  return (
    <ul>
         {items.map((item) => (

            <Item
            item = {item}
            key = {item.id}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            ></Item>
             
         ))}
      </ul>
  )
}

export default ItemsList