import React, {useState} from 'react';
import './votacao.css';
 
function Votacao() {
    const [opcao1, setOpcao1] = useState('');
    const [opcao2, setOpcao2] = useState('');
    const [opcao3, setOpcao3] = useState('');
    const [votacao, setVotacao] = useState(null);

    function vota1(){
        setOpcao1(opcao1 + 1)
    }
    function vota2(){
        setOpcao2(opcao2 + 1)
    }
    function vota3(){
        setOpcao3(opcao3 + 1)
    }

    const ResultadoVotacao = () => {
        setVotacao(votacao);

        if (opcao1 > opcao2 && opcao1 > opcao3){
            alert ("O resultado é de Fantasia!")
        }
        else if (opcao2 > opcao1 && opcao2 < opcao3){
            alert ("O resultado é de Suspense!")
        }
        else {
            alert ("O resultado é de Romance!")
        }
    };
 
 
return (
    <div className='quadro'>
        <h3 className='texto'>Fantasia</h3>
        <button onClick={vota1} className='botao'>↑ Votar</button><br></br><br></br>
        <h3 className='texto'>Suspense</h3>
        <button onClick={vota2} className='botao'>↑ Votar</button><br></br><br></br>
        <h3 className='texto'>Romance</h3>
        <button onClick={vota3} className='botao'>↑ Votar</button>
        <br></br><br></br><br></br><br></br>
        <button onClick={ResultadoVotacao} className='botaoresultado'>Ver resultado</button>
        {votacao !==null && <p>O resultado da votação é: {votacao}</p>}
    </div>
)
}
 
export default Votacao;
