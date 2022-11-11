import Carreiras from "./components/HomePage/Carreiras";
import Home from "./components/HomePage/Home";

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Metodologia from "./components/HomePage/Metodologia";
import Comunidade from "./components/HomePage/Comunidade";
import SaibaMais from "./components/HomePage/SaibaMais";
import Login from "./components/HomePage/Login";
import Cadastro from "./components/HomePage/Cadastro";

import Dashboard from "./components/Private/Dashboard";
import { AuthProvider } from "./contexts/authVerify";
import { Fragment } from "react";
import { PrivateRoutes } from "./components/PrivateRoutes";


function App() {


  return (
    <div className="bg-background bg-no-repeat bg-cover">
      <Router>

      <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/carreiras" element={<Carreiras/>}/>
            <Route path="/Metodologia" element={<Metodologia/>}/>
            <Route path="/Comunidade" element={<Comunidade/>}/>
            <Route path="/Saibamais/:id" element={<SaibaMais/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Cadastro" element={<Cadastro/>}/>
            {/* Rotas Restritas com Autenticação */}
            
            
            

              <Route path="/Dashboard" element={<PrivateRoutes/>}>
                <Route path="/Dashboard" element={<Dashboard/>}/>
              </Route>
            
            
            


          </Routes>
          </AuthProvider>

      </Router>
      
      
      
    </div>
  );
}

export default App;
