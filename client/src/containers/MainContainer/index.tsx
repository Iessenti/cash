
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AddOperationModal } from '../../components/AddOperationModal/index'

import { showAddOperationModal, SHOW_ADD_OPERATION_MODAL } from '../../store/reducers/ModalReducer'
import { getAllOperations, OperationInterface } from '../../store/reducers/OperationsListReducer'

import { OperationPanel } from '../../components/OperationPanel/index'
import { CountCircle } from '../../components/CountCircle/index'

import './styles.sass'

export const MainContainer = () => {

    const dispatch = useDispatch()

    const operationsList = useSelector( (state: any) => (state.operationsList) )
    const currentValue = useSelector( (state: any) => (state.currentValue) )

    useEffect( () => {

        dispatch( getAllOperations() )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const isOperationModalOpened = (useSelector((state: any) => (state.modal)) === SHOW_ADD_OPERATION_MODAL)

    return (
        <div
            className='image-background'
        >

            <div
                className='main-container'
            >
                
                <CountCircle/>

                <span
                    className='main-container__current-value'
                >
                    {
                        currentValue
                    }
                    ₽
                </span>

                <div
                    className='main-container__operations-list'
                >
                    <OperationPanel data={{
                            name: '',
                            category: 'Предметы', 
                            type: '+', 
                            color: 'red', 
                            value: '212', 
                            date: '22.22.2222', 
                            bankbookId: 0}
                    }/>
                    {
                        (operationsList
                        &&
                        operationsList.length   
                        &&
                        operationsList.length > 0)
                        ?
                        <>
                            {
                                operationsList.map( (elem: OperationInterface, index: number) => {
                                    <div
                                        key={index}
                                    >
                                        <OperationPanel data={elem}/>
                                    </div>
                                })
                            }
                        </>
                        :
                        <span
                            className='main-container__empty-list-text'
                        >
                            Вы пока не добавили ни одной операции
                        </span>
                    }
                </div>
                
                <div
                    className='main-container__add-plus-button'
                    onClick={() => dispatch( showAddOperationModal() )}
                >
                    +
                </div>

            </div>
            
            {
                isOperationModalOpened
                &&
                <AddOperationModal/>
            }

        </div>

    )
}