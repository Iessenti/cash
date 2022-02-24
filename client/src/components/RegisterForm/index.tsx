import { useState } from "react"
import { useDispatch } from "react-redux"

import './styles.sass'

export const RegisterForm = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState<string>('')

    const onSubmit = () => {
        if (name.length >= 2) {
            dispatch( (name) )
        }
    }

    return (
        <div
            className="register-form-wrapper"
        >
            <form
                onSubmit={() => onSubmit()}
            >
                <span>
                    Введите Ваше имя
                </span>
                <input 
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <div
                    className="standard-button"
                    onClick={() => onSubmit()}
                >
                    Отправить
                </div>
            </form>
        </div>
    )
}