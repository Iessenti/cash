import { Link } from 'react-router-dom'
import { ManImage } from '../../assets/man'
import { routes } from '../../routes'
import './styles.sass'

export const HomePageContainer = () => {

    return (
        <div
            className='image-background'
        >
            <div
                className='homepage-wrapper '
            >
                <div
                    className='homepage-wrapper__left-side'
                >
                    <ManImage/>
                </div>

                <div
                    className='homepage-wrapper__right-side'
                >
                    <div className='circle' />

                    <span
                        className='homepage-wrapper__right-side__title'
                    >
                        Добро пожаловать!
                    </span>

                    <span
                        className='homepage-wrapper__right-side__desc'
                    >
                        В новейший инструмент<br/> учета личных финансов            
                    </span>

                    <div
                        className='standard-button'
                    >  
                        <Link to={routes.auth}>
                            ВОЙТИ
                        </Link>
                    </div>
                </div> 
            </div>
        </div>
    )
}