export function Todos({todos}){
    
    return <div>
        {todos.map(function(todo){
            return <div>
                <h2>{todo.title}</h2>
                <h3>{todo.description}</h3>
                <button style={{margin:5, borderRadius:5, padding:5,backgroundColor:"green" ,color:"white"}} >Mark as completed</button>
            </div>
        })}
    </div>
}