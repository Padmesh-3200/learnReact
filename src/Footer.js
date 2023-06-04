import React from 'react'
import { FaReact } from 'react-icons/fa';

const Footer = ({items}) => {
  
  const finishedItems = items.filter(function(item){
     if(!item.checked){
      return
     }
     return item;
  }).length;

  const unfinishedItems = items.length - finishedItems;
  return (
    <footer>
       {unfinishedItems!==0 ?
           (<p>{finishedItems} has finished {unfinishedItems} should be finished</p>)
           :JSON.parse(localStorage.getItem("todo")).length===0?
           (<FaReact
            size={50}
           ></FaReact>)
           :(<p>You completed all the tasks</p>)
       }
       
      
      </footer>
  )
}

export default Footer