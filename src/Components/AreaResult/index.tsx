

type Props={
    resValue:number | string | any,
   title:string
}
export const AreaResult=({resValue,title}:Props)=>{

    return <>
  <div className='cx-area'>
      {title} : <span className="area"> {resValue} </span>
  </div>
    </>

}