
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { earnsCategories, spendCategories } from '../../consts'
import store from '../../store'
import { closeModal } from '../../store/reducers/ModalReducer'
import { OperationInterface } from '../../store/reducers/OperationsListReducer'
import './styles.sass'

export const AddOperationModal = () => {
    
    const dispatch = useDispatch()

    const [form, setForm] = useState({
        name: '', 
        category: '', 
        type: '', 
        color: '', 
        value: '', 
        date: '', 
        bankbookId: store.getState().account
    })

    const onValueChange = (value: string) => {
        if (/^[0-9.]*$/.test(value) || value.length === 0 ) { // 
            if ( !(value[value.length - 1]==='.' && form.value[form.value.length-1]==='.') && value.split('.').length<=2) {
                setForm({...form, value: value})
            }  
        }
    }

    const onSubmit = () => {
        if (
            form.category.length>0
            &&
            form.value.length>0
            &&
            form.color.length>0
            &&
            form.type.length>0
        ) {
            dispatch( closeModal() )
        }
    }

    return (
        <div
            className="modal-wrapper"
        >
            <div
                className="add-operation-modal-wrapper"
            >

                <div
                    className='add-operation-modal-wrapper__close-icon'
                    onClick={() => dispatch(closeModal())}
                >
                    +
                </div>

                <div
                    className="add-operation-modal-wrapper__value-row"
                >
                    <div>
                        <div
                            className={`
                                add-operation-modal-wrapper__value-row__operand-button
                                ${ form.type === '+' && 'choosen-operand-button' }    
                            `}
                            onClick={() => setForm({...form, type: '+', category: ''})}
                            style={{marginRight: '8px'}}
                        >
                            <span>
                                +
                            </span>    
                        </div>

                        <div
                            className={`
                                add-operation-modal-wrapper__value-row__operand-button
                                ${ form.type === '-' && 'choosen-operand-button' }    
                            `}
                            onClick={() => setForm({...form, type: '-', category: ''})}
                            style={{paddingBottom: '10px'}}
                        >
                            <span>
                                -
                            </span>
                        </div>
                    </div>

                    <input 
                        type='text'
                        value={form.value}
                        onChange={(event) => onValueChange(event.target.value)}
                        className='standard-input'
                    />
                </div>

                <div
                    className="add-operation-modal-wrapper__categories-row"
                >
                    <div
                        className="add-operation-modal-wrapper__categories-row__inside-wrapper"
                    >         
                        {   
                            form.type === '-'
                            ?
                            spendCategories.map( (elem, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{color: elem.color}}
                                        onClick={() => setForm({...form, color: elem.color, category: elem.name})}
                                        className={form.category === elem.name ? 'choosen-spend-category-panel' : ''}
                                    >
                                        {elem.name}
                                    </div>
                                )
                            })
                            :
                            earnsCategories.map( (elem, index) => {
                                return (
                                    <div
                                        key={index}
                                        style={{color: elem.color}}
                                        onClick={() => setForm({...form, color: elem.color, category: elem.name})}
                                        className={form.category === elem.name ? 'choosen-spend-category-panel' : ''}
                                    >
                                        {elem.name}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div
                    className='add-operation-modal-wrapper__description'
                >

                    {
                        (form.value.length>0 && form.category.length>0)
                        &&
                        (
                            (form.type === '-') 
                            ?
                            <div>
                                Итого Вы потратили {form.value} рублей на {form.category}. <br/>
                                Надеюсь, было весело!
                            </div>
                            :
                            <div>
                                Итого Вы заработали {form.value} рублей благодаря: {form.category}. <br/>
                                Что ж, Вы молодец!
                            </div>
                        )
                    }   

                </div>

                <div
                    className='add-operation-modal-wrapper__button'
                    onClick={() => onSubmit()}
                >
                    Отправить
                </div>
            </div>
        </div>
    )
}