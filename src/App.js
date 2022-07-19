import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from "./components/Main";
import Home from "./components/Home";
import Rank from "./components/Rank";




function App() {


  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>  

      <Routes>
        <Route path="/speedbee" element={<Main />}/>
      </Routes>

      <Routes>
        <Route path="/rank" element={<Rank />}/>
      </Routes>
      
    </Router>
  );
}

export default App;