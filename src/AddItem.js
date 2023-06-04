import React from 'react'
import { FaPlus } from 'react-icons/fa'
const AddItem = ({newItem,setNewItem,handleSubmitAddItem}) => {
  return (
    <form className='addForm' onSubmit={(e)=>e.preventDefault()}>
       <label htmlFor="addItem"> Add Item</label>
       <input
        autoFocus
        id ='addItem'
        type="text"
        placeholder='Add item'
        required
        value = {newItem}
        onChange={(e)=>setNewItem(e.target.value)}
       />
       {/* Controled inputs are handled only by state (newone) */}
       <button
       type='submit'
       aria-label = 'Add Item'
       onClick={handleSubmitAddItem}
       >
        <FaPlus
        ></FaPlus>
       </button>
    </form>
  )
}

export default AddItem