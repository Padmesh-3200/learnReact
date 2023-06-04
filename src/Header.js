import React from 'react'

function Header({title}){
    
    // function animal(){
    //     const arr = ["bird","cat","snake"];
    //     const index = Math.floor(Math.random()*arr.length); 
    //     return arr[index];
    // }
 return(
    
    <header>
     <h1>{title}</h1> 
    </header>
 )
} 

Header.defaultProps ={
   title: "To DO List"
}

export default Header