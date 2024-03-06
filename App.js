import { Routes,Route,Link} from "react-router-dom";
import './Component/Agecaldate.css'
import Agecaldate from './Component/Agecaldate.js';
import Agecalc from "./Agecalc.js";


function App() {
  return(
    <>
    <ol>
      <li><Link to='/agecal'> Age Calculator using DOB </Link></li>
      <li><Link to='/agecalyear'> Age Calculator using Year</Link></li>
    </ol>
    <Routes>
      <Route path="/agecal" element={<Agecaldate/>}/>
      <Route path="/agecalyear" element={<Agecalc/>}/>
    </Routes>
    </>
  );
}
export default App;

