import { useState } from 'react'
import * as S from  './app.styled'
import { Header } from './Components/Header'
import { Input } from './Components/Input'
const iconReset=<img src="https://img.icons8.com/color/48/000000/available-updates.png"/>




const App=()=>{


    const [area,setArea]=useState('00')
    const [perimetro,setPerimetro]=useState('00')
    const [diagonal,setDiagonal]=useState('00')

    return <>
    <S.Container>
        <Header />
        <S.ContainerApp>
           <S.ContainerInputs>
                <Input placeholder='Base do Retângulo' />
                <Input placeholder='Altura do Retângulo'/>
           </S.ContainerInputs>

           <S.ContainerButtons>
                <button className="btn-calcular">calcular</button>
                <button className='btn-reset'>{iconReset}</button>
           </S.ContainerButtons>
         
           <S.ContainerResult>
                <div>Area : <span className="area"> {area} </span></div>
                <div>Perimetro: <span className="area">{perimetro}</span></div>
                <div>Diagonal: <span className="area">{diagonal}</span></div>

           </S.ContainerResult>
        </S.ContainerApp>
    </S.Container>
    
    
    
    
    
    </>



}

export default App