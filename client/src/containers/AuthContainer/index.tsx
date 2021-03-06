import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AdditionalImage } from "../../assets/additionalImage"
import { AuthForm } from "../../components/AuthForm"
import { routes } from "../../routes"

import './styles.sass'

export const AuthContainer = () => {

    const navigate = useNavigate()

    const userAuthorized = useSelector( (state: any) => (state.auth))
    
    useEffect( () => {
        if (userAuthorized.phone && userAuthorized.id.length>0) {
            if (userAuthorized.isUserAuthorized) {
                navigate(routes.home)
            } else {
                navigate(routes.register)
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userAuthorized])

    return (
        <div
            className='image-background'
        >
            <div
                className="authpage-wrapper"
            >
                <div
                    className="authpage-wrapper__title"
                >
                    <span>
                        Вход
                    </span>

                    <div className="circle" />
                </div>
        
                <AuthForm/>

                <div
                    className="authpage-wrapper__image"
                >
                    <AdditionalImage />
                </div>
                
            </div>
            
        </div>
    )
}