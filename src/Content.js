import React from 'react'
import ItemsList from './ItemsList'
const Content = ({items,handleCheck,handleDelete}) => {

  return (
    <main>
      {items.length ? (
      <ItemsList 
      items = {items}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />):
      JSON.parse(localStorage.getItem("todo")).length===0?
      (<p>champ ..! your list is empty</p>):(<p></p>)
   }
    </main>
  )
}

export default Content