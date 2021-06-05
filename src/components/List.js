import Todo from './Todo'
// functional component
const List = ({ todos }) => {
    return (
        <div>
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} /> 
          )}  
        </div>
    )
}
// pass todos object as a prop, map through the array and give the todo an id and the item. key is necessary to have a unique spot, when trying to render a list of components will throw error without key.
export default List

