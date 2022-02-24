import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CreateNewAccountForm } from '../../components/CreateNewAccountForm/index'
import { routes } from '../../routes'

import './styles.sass'

export const NewAccountContainer = () => {

    const navigate = useNavigate()

    const accountId = useSelector( (state: any) => (state.account) )

    useEffect( () => {
        if (accountId > 0) {
            navigate(routes.home)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accountId])

    return (
        <div
            className='image-background'
        >
            <div
                className="new-account-page-wrapper"
            >
                <div
                    className="new-account-page-wrapper__title"
                >
                    <span>
                        Создать <br/> счёт
                    </span>
                </div>
        
                <CreateNewAccountForm/>
                
            </div>
            
        </div>
    )
}