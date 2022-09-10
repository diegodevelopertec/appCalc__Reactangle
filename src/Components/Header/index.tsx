import * as S from './style'

const gitIcon=<img src="https://img.icons8.com/ios-filled/100/000000/github.png"/>
export const Header=()=>{

    return <>
    <S.container>
        <div className="title-app">
            calculador de Dados de Rentagulo
        </div>
        <div className="git">
             <a href="https://github.com/diegodevelopertec?tab=repositories">Desenvolveidor por Diego Morais</a>  {gitIcon}
        </div>


    </S.container>
    
    
    
    
    </>





}