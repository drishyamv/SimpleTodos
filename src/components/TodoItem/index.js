import './index.css'

const TodoItem = props => {
  const {todoList, deleteTodo} = props
  const {title, id} = todoList
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todoItem">
      <p className="todoName">{title}</p>
      <button type="button" className="delete-todo" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
