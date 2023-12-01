import React, {useState} from 'react';
import './App.css';
import Votacao from './components/votacao';
function App() {
 
  return (
    <div className="App">
      
      <h2 className='titulo'>Qual seu tipo de livro favorito (gênero)?</h2>
        <Votacao/>
    </div>
  );
}
 
export default App;
