import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";

import './mainStyles.sass'

import { HomePage } from './pages/HomePage'
import { AuthPage } from './pages/AuthPage'
import { useSelector } from "react-redux";

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
                <Route path={routes.main} element={<HomePage/>}/>
                <Route path={routes.auth} element={<AuthPage/>} />   
              </>
            }

          </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
