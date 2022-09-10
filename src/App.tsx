import { useEffect } from 'react'
import { ChangeEvent, useState } from 'react'
import * as S from  './app.styled'
import { AreaResult } from './Components/AreaResult'
import { Header } from './Components/Header'
import { Input } from './Components/Input'
const iconReset=<img src="https://img.icons8.com/color/48/000000/available-updates.png"/>




const App=()=>{
    
    const [onMessageError,setOnMessageError]=useState(false)
    const [baseRectangle,setBaseRectangle]=useState<number | string | any>('')
    const[weightRectangle,setWeightRectangle]=useState<number | string | any>('')
    const [area,setArea]=useState<Number | string>('00')
    const [perimetro,setPerimetro]=useState<Number | string>('00')
    const [diagonal,setDiagonal]=useState<Number | string>('00')
    const [displayResult,setDisplayResult]=useState(false)

useEffect(()=>{
    if(baseRectangle !== '' && weightRectangle !==''){
        setOnMessageError(false)
    }else{
       
        setOnMessageError(true)
    }
    
},[baseRectangle,weightRectangle])

const actionsButtons={
   
   
    calculate:()=>{
        if(weightRectangle &&  baseRectangle){
        

            parseFloat(baseRectangle)
            parseFloat(weightRectangle)
            let areaRectangle:number=baseRectangle * weightRectangle
            let areaPerimetro=(baseRectangle * 2 + weightRectangle * 2)

            let potenciaBase:number=Math.pow(baseRectangle, 2)
            let potenciaWeight:number=Math.pow(weightRectangle, 2)
            let somePontencias=potenciaBase + potenciaWeight
            let diagonal=Math.sqrt(somePontencias)


       
      
            setArea(areaRectangle.toFixed(4))
            setPerimetro(areaPerimetro.toFixed(4))
            setDiagonal(diagonal.toFixed(4))
            setDisplayResult(true)
        }


    },
    resetFields:()=>{
        setBaseRectangle('')
        setWeightRectangle('')
        setArea('00')
        setDiagonal('00')
        setPerimetro('00')
        setDisplayResult(false)

    }
}


const actionsInputs={

    valueBase:(e:ChangeEvent<HTMLInputElement>)=>{
        setBaseRectangle(e.target.value)   
     },
     valueWeight:(e:ChangeEvent<HTMLInputElement>)=>{
        setWeightRectangle(e.target.value)
     }


}




    return <>
    <S.Container>
        <Header />
        <S.ContainerApp>
        
         <S.ContainerInputs>
                <Input placeholder='Base do Retângulo' value={baseRectangle} onChange={actionsInputs.valueBase}/>
                <Input placeholder='Altura do Retângulo'  value={weightRectangle} onChange={actionsInputs.valueWeight} />
                {onMessageError && <S.ErrorMensage>
                    <span>Preencha Todos os campos</span>
                </S.ErrorMensage>}
           </S.ContainerInputs>
       

           <S.ContainerButtons>
                <button className="btn-calcular" onClick={actionsButtons.calculate}>calcular</button>
                <button className='btn-reset' onClick={actionsButtons.resetFields}>{iconReset}</button>
           </S.ContainerButtons>

           {displayResult &&
                  <S.ContainerResult>
                   <AreaResult title='Àrea' resValue={area} />
                   <AreaResult  title='Perimetro' resValue={perimetro} />
                   <AreaResult title='Diagonal' resValue={diagonal} />
              </S.ContainerResult>
               
               }
         
        </S.ContainerApp>
    </S.Container>
    
    
    
    
    
    </>



}

export default App