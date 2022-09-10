import './style.css'
type Props={
   placeholder:string
}

export const Input=({placeholder}:Props)=>{

    return <>
      <input type="text" placeholder={placeholder}/>
    </>


}