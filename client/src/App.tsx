import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux"
import { routes } from "./routes";

import './mainStyles.sass'

import { HomePage } from './pages/HomePage'
import { AuthPage } from './pages/AuthPage'
import { RegisterPage } from './pages/RegisterPage'
import { NewAccountPage } from './pages/NewAccountPage'
import { MainPage } from './pages/MainPage'

function App() {

  const isUserAuthorized = (useSelector( (state: any) => (state.auth)).phone.length > 0)

  return (
    <div className="container">
      <BrowserRouter>
  
          <Routes>
            {
              isUserAuthorized
              ?
              <>
                
              </>
              :
              <>
                <Route path={routes.main} element={<HomePage/>} />
                <Route path={routes.auth} element={<AuthPage/>} />   
                <Route path={routes.register} element={<RegisterPage/>} />
                <Route path={routes.newAccount} element={<NewAccountPage/>} />
                <Route path={routes.home} element={<MainPage/>} />
              </>
            }

          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
