
export const SHOW_ADD_OPERATION_MODAL = 'SHOW_ADD_OPERATION_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

const initialState: string = ''

export const ModalReducer = ( state = initialState, action: any ) => {

    switch (action.type) {

        case CLOSE_MODAL:
            return ''

        case SHOW_ADD_OPERATION_MODAL:
            return 'SHOW_ADD_OPERATION_MODAL'

        default:
            return state
    }
} 

export const closeModal = () => ({type: CLOSE_MODAL})
export const showAddOperationModal = () => ({type: SHOW_ADD_OPERATION_MODAL})
