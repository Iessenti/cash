import { useState } from "react"
import { useDispatch } from "react-redux"
import { tryToCreateNewAccount } from "../../store/reducers/AccountReducer"

import './styles.sass'

export const CreateNewAccountForm = () => {

    const dispatch = useDispatch()

    const [accountName, setAccountName] = useState<string>('')
    const [currentValue, setCurrentValue] = useState<string>('')

    const onSubmit = () => {
        if (accountName.length>0 && currentValue.length>0) {
            dispatch( tryToCreateNewAccount(
                {currentValue: currentValue, accountName: accountName}
            ) )
        }
    }

    const onCurrentValueChange = (value: string) => {
        if (/^[0-9.]*$/.test(value) || value.length === 0 ) { // 
            if ( !(value[value.length - 1]==='.' && currentValue[currentValue.length-1]==='.') && value.split('.').length<=2) {
                setCurrentValue(value)
            }  
        }
    }

    return (
        <div
            className="create-new-account-form-wrapper"
        >
            <form
                onSubmit={() => onSubmit()}
            >
                <input 
                    type='text'
                    value={accountName}
                    onChange={(event) => setAccountName(event.target.value)}
                    placeholder='Введите название'
                />
                <input 
                    type='text'
                    value={currentValue}
                    onChange={(event) => onCurrentValueChange(event.target.value)}
                    placeholder='Введите баланс'
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