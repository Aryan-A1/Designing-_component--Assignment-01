import {Route, Routes} from 'react-router-dom'
import './App.css';
import Usercard from './components/usercard.jsx';


function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Usercard/>}/>
    </Routes>
    </>
  );
}

export default App;
