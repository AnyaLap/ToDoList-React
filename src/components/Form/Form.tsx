import { useState } from 'react'
import { FormControl, FormBlock, FormField, FormLabel, FormWrapper } from './Form.styled'
import plusIcon from '../../assets/images/plus.png'

export const Form = (props: {createNewToDo: Function}) => {

    const [text,setText] = useState<string>('')

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault()
        if (text) {
            props.createNewToDo(text)
            setText('')
        }
    }

    return (
        
        <FormWrapper>
            <FormBlock action="#" onSubmit = {formSubmit}>
                <FormLabel>
                    <FormField 
                      value={text}
                      onChange={(e)=>setText(e.target.value)}
                      type="text" />
                    <div>
                        <FormControl icon = {plusIcon}/>
                    </div>
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    )
}