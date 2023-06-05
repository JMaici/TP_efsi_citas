
import './App.css';
import './index.css'
import Formulario from './Formulario';
import Citas from './Citas';
import { useState } from 'react';
function App() {
  const [citas, setCitas] = useState([]);


  return (
    <div>
      
        <Formulario citas={citas} setCitas={setCitas} />
        <Citas citas={citas} setCitas={setCitas}/>
    </div>
  );
};


export default App;
