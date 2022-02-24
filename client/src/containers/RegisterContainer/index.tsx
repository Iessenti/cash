import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AdditionalImage } from "../../assets/additionalImage"

import { RegisterForm } from '../../components/RegisterForm/index'
import { routes } from "../../routes"

import './styles.sass'

export const RegisterContainer = () => {

    const navigate = useNavigate()

    const user = useSelector( (state: any) => (state.auth))

    useEffect( () => {
        if (user.name.length > 0) {
            navigate(routes.newAccount)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    return (
        <div
            className='image-background'
        >
            <div
                className="register-page-wrapper"
            >
                <div
                    className="register-page-wrapper__title"
                >
                    <span>
                        Регистрация
                    </span>
                </div>
        
                <RegisterForm/>

                <div
                    className="register-page-wrapper__image"
                >
                    <AdditionalImage />
                </div>
                
            </div>
            
        </div>

    )
}