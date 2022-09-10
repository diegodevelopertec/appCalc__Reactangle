import { ChangeEvent } from 'react'
import './style.css'
type Props={
   placeholder:string,
   value:string | number | any,
   onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}

export const Input=({placeholder,value,onChange}:Props)=>{

    return <>
      <input type="number" placeholder={placeholder} value={value} onChange={onChange}/>
    </>


}