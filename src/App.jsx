import Carreiras from "./components/HomePage/Carreiras";
import Home from "./components/HomePage/Home";

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div className="">
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/carreiras" element={<Carreiras/>}/>

        </Routes>
      </Router>
      
      
      
    </div>
  );
}

export default App;
