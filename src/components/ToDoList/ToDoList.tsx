import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { ToDo } from "../../models/todo-item"
import { ToDoListBlock, ToDoListWrapper } from "./ToDoList.styled"

export const ToDoList = (props: {todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {

    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, idx) => {
                return (
                    <ToDoListItem 
                    toDoItem={item} 
                    key={idx}
                    updateToDo={props.updateToDo} 
                    deleteToDo={props.deleteToDo} />
                )
            })
    }

    const unCheckedList = () => {
        return props.todos
        .filter((item) => item.isDone)
        .map((item,idx) => {
            return (
                <ToDoListItem 
                toDoItem={item} 
                key={idx} 
                updateToDo={props.updateToDo} 
                deleteToDo={props.deleteToDo}/>
            )
        })
    }
    return (
        < ToDoListWrapper >
            <ToDoListBlock className="failed">
                {checkedList()}
            </ToDoListBlock>
            <ToDoListBlock className="completed">
                {unCheckedList()}
            </ToDoListBlock>
        </ ToDoListWrapper>
    )
}