import React from 'react'
import { FaTrash } from "react-icons/fa"
const Item = ({item,handleCheck,handleDelete}) => {
  return (
        <li className='item'>
                  <input type ="checkbox"
                  onChange={()=>handleCheck(item.id)} 
                  checked={item.checked} />
                  <label style={(item.checked)?
                  {textDecoration : 'line-through' }:null} 
                  onDoubleClick={()=>handleCheck(item.id)} >
                    {item.item}</label>
                  <FaTrash 
                  role = "button"
                  tabIndex="0"
                  onClick={()=>handleDelete(item.id)}
                  />
        </li>
      )
    }
    
export default Item