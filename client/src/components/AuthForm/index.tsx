import { useState } from "react"
import { useDispatch } from "react-redux"
import { tryToLogin } from "../../store/reducers/AuthReducer"

import './styles.sass'

export const AuthForm = () => {

    const dispatch = useDispatch()

    const [phone, setPhone] = useState<string>('')
    const [code, setCode] = useState<string>('')

    const [stage, setStage] = useState<number>(1)

    const handlePhoneChange = (value: string) => {
        if (/\d/g.test(value) || /\d/g.test(value)) {
            if (phone.length === 0) {
                setPhone('+7' + value)
            } else if (phone.length <12) {
                setPhone(value)
            } 
            if ((value.length < phone.length) && (value.length <= 2 )) {
                setPhone('')
            } else if (value.length < phone.length) {
                setPhone(value.slice(0, value.length-1))
            } 
            if (value.length === 12) {
                setStage(2)
            }
        } 
    }

    const handleCodeChange = (value: string) => {
        console.log(value)
        if (value === '5555') {
           dispatch( tryToLogin(phone) )
        } 
        if (value.length <= 4) {
            setCode(value)
        }
        
    }

    return (
        <div
            className="auth-form-wrapper"
        >
            {
                (stage === 1)
                ?
                <div>
                    <span>
                        Введите номер телефона
                    </span>
                    <input 
                        type='text'
                        value={phone}
                        placeholder='+7'
                        onChange={(event) => handlePhoneChange(event.target.value)}
                    />
                </div>
                :
                <div>
                    <span>
                        Введите код из смс
                    </span>
                   <input
                        type='text'
                        value={code}
                        placeholder="5555"
                        onChange={(event) => handleCodeChange(event.target.value)}
                   />
                </div>
            }
        </div>
    )
}