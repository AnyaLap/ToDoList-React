import { ToDo } from "../../models/todo-item"
import { ListItemLink } from "./ListItem.styled"

export const ListItem = ({todo}: {todo: ToDo}) => {
    return (

        <ListItemLink 
        color={todo.isDone ? 'green' : 'red'} 
        rel="noreferrer"
        target="_blank"
        href={`/app/list/${todo.id}`}
        >
            {todo.text}
        </ListItemLink>

    )
}