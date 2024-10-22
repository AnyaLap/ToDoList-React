import { ToDo } from "../../models/todo-item"
import { ListItemLink } from "./ListItem.styled"

export const ListItem = ({todo}: {todo: ToDo}) => {
    return (

        <ListItemLink 
        color={todo.isDone ? 'white' : 'blueviolet'} 
        rel="noreferrer"
        target="_blank"
        href={`/todo/list/${todo.id}`}
        >
            {todo.text}
        </ListItemLink>

    )
}