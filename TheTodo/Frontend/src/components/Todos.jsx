export function Todos({todos}){
  return <div>
      {todos.map(function(Todo){
          <div key={Todo._id}>
          <h1>{Todo.title}</h1>
          <h1>{Todo.description}</h1>
          <button>{Todo.completed?"Completed":"mark as Completed"}</button>
          </div>
          
      })}
      </div>
}