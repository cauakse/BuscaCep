import { useState } from "react"
import Cep from './class/cep.js'
import { CiSearch } from "react-icons/ci";
import CepObj from './components/CepObj.jsx'
const url = 'https://viacep.com.br/ws/'

export default function App () {
  const [input,setInput] = useState("");
  const [cep,setCep] = useState();


  const handleClick = ()=>{
    fetch(url+input+"/json")
    .then(promise=>promise.json())
    .then(data=>{
      setCep(new Cep(data))
      console.log(cep)
    })
  
  }
  return (
    <>
      <div className="container">
        <h1 className="tittle">Buscador de Cep</h1>
        <div className="inputContainer">
              <input type="text" id="inputCep"
              value={input}
              placeholder="Digite seu Cep"
              onChange={(e)=>setInput(e.target.value)}/>
            <button 
            onClick={handleClick}
            className="cepBtn"
            ><CiSearch/></button>
        </div>
        {cep ? <CepObj cep={cep}/> : null}
      </div>
    </>
  )
}