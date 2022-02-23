import { AdditionalImage } from "../../assets/additionalImage"
import { AuthForm } from "../../components/AuthForm"

import './styles.sass'

export const AuthContainer = () => {

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