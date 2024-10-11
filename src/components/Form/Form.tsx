import classes from './Form.module.scss'

export const Form = () => {
    return (
        <div className={classes.wrapper}>
            <form action="#">
                <label>
                    <input className={classes.formInput} type="text" />
                    <button className={classes.formBtn} ></button>
                </label>
            </form>
        </div>
    )
}