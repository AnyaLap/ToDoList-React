
import { NotFoundLink, NotFoundText, NotFoundTitle, NotFoundWrapper } from "./404.styled"


export const NotFound = () => {
    
    return (
        <NotFoundWrapper>
            <NotFoundTitle>404</NotFoundTitle>
            <NotFoundText>Not Found!</NotFoundText>
            <NotFoundLink href='/todo/'>To Home</NotFoundLink>
        </NotFoundWrapper>
    )
}