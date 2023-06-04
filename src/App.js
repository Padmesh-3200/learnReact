import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import AddItem  from './AddItem';
import SearchItem from './SearchItem';
import { useState } from 'react';


function App() {

  const [items,setItems] = useState(JSON.parse(localStorage.getItem("todo")))

  const handleCheck = (id) =>{
    const listItems = items.map(function(item){
      if(id ===item.id){
           item.checked=!item.checked;  
           return item;
      }
      return item
    })
  setItems(listItems)
  localStorage.setItem("todo",JSON.stringify(listItems))
  }

  const handleDelete = (id) =>{
   
    const listItems = items.filter(function(item){
      if(id ===item.id){
           return 
      }
      return item
    }) 
      setItems(listItems)
      localStorage.setItem("todo",JSON.stringify(listItems))
  }

   {/* Controled inputs are handled only by state (newone) 
       Adding new item to the list
  */}
  const[newItem,setNewItem] = useState('')
  const handleAdd =(newItem)=>{
    const id = items.length?items[items.length-1].id+1:0;
    const additem = {id:id,checked:false,item:newItem}
    const listItems = [...items]
    listItems.push(additem)
    setItems(listItems)
    localStorage.setItem("todo",JSON.stringify(listItems))
  }

  const handleSubmitAddItem =(e)=>{
    if(!newItem) return;
    handleAdd(newItem)
    setNewItem('')
  }

  const[search,setSearch] = useState('')
  
  return (
    <div className='App'>
       <Header/> 
       {/* Adding the inputs to the componnets id Props feeding and props drilling */}
       <AddItem 
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmitAddItem={handleSubmitAddItem}  
       />
       <SearchItem
       search={search}
       setSearch={setSearch}>
       </SearchItem>
       <Content
       items= {items.filter(item=>(item.item).includes(search)
       )}
       handleCheck = {handleCheck}
       handleDelete = {handleDelete}
       ></Content>
       <Footer
       items = {items}
       ></Footer>
    </div>
  )  
}

export default App;
