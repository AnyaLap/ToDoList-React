import { Link } from "react-router-dom"


export const NotFound = () => {
    
    return (
        <div className="container error">
            <h1 className="error__title">404</h1>
            <p className="error__text">Not Found!</p>
            <Link className="error__link" to='/'>To Home</Link>
        </div>
    )
}