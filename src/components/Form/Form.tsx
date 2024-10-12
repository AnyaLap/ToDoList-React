import { useState } from 'react'
import classes from './Form.module.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Form = (props: {createNewToDo: Function}) => {

    const [text,setText] = useState<string>('')

    const formSubmit = () => {
        if (text) {
            props.createNewToDo(text)
            toast("Задача добавлена!")
            setText('')
        }
    }

    return (
        
        <div className={classes.wrapper}>
            <form action="#" onSubmit = {formSubmit}>
                <label>
                    <input 
                      value={text}
                      className={classes.formInput}
                      onChange={(e)=>setText(e.target.value)}
                      type="text" />
                    <div>
                        <button 
                        className={classes.formBtn}>
                        </button>
                    </div>
                </label>
            </form>
            <ToastContainer position='bottom-right'/>
        </div>
    )
}