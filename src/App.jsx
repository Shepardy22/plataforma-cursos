import Carreiras from "./components/HomePage/Carreiras";
import Home from "./components/HomePage/Home";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div className="h-screen bg-background bg-no-repeat bg-cover">
      <NavBar />
      <Home/>
      <Carreiras/>
      
    </div>
  );
}

export default App;
