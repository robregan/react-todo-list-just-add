import { useState } from 'react'
// setting on add prop via destructuring like onClick but add a new todo
const AddTodo = ({ onAdd }) => { 
    const [item, setItem] = useState('')
// creating vars to make use of state. initial state is blank 
    const onSubmit = (e) => { // handler function 
        e.preventDefault() // changing the behavior of the event using preventDefault so dont have to reload
        onAdd({item}) // adds item to list w onAdd function pass in item ... still a little confused about this addTodo function

        setItem('') // setting item value back to empty 
    }

    return (
        <form onSubmit={onSubmit}> // handler function
            <label>Add Todo:</label>
            <input 
                type="text" 
                placeholder="Todo Item"
                value={item}
                onChange={ (e) => setItem(e.target.value)} // anon function, only fires off onchange 
            /> 
            <input type="submit" value="Add Todo" /> // submit button
        </form>
    )
}

export default AddTodo
