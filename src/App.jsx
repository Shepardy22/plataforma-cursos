import Carreiras from "./components/HomePage/Carreiras";
import Home from "./components/HomePage/Home";

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Metodologia from "./components/HomePage/Metodologia";
import Comunidade from "./components/HomePage/Comunidade";
import SaibaMais from "./components/HomePage/SaibaMais";
import Login from "./components/HomePage/Login";
import Cadastro from "./components/HomePage/Cadastro";


function App() {


  return (
    <div className="bg-background bg-no-repeat bg-cover">
      <Router>

        <NavBar /> 

          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/carreiras" element={<Carreiras/>}/>
            <Route path="/Metodologia" element={<Metodologia/>}/>
            <Route path="/Comunidade" element={<Comunidade/>}/>
            <Route path="/Saibamais/:id" element={<SaibaMais/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Cadastro" element={<Cadastro/>}/>
            


          </Routes>

      </Router>
      
      
      
    </div>
  );
}

export default App;
