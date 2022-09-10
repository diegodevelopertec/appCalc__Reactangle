import styled from "styled-components";


export const Container=styled.div`
width: 100vw;
height: 100vh;
background-color:#28253d;
display: flex;
flex-direction: column;
align-items: center;


@media screen and (max-width:800px){
    padding-bottom:100px;
}
`

export const ContainerApp=styled.div`
margin-top: 50px;
padding: 20px;
width: 600px;
height: 400px;
background-color: #15122e;
box-shadow: 0 0 10px #eee;
border-radius: 15px;

@media screen and (max-width:800px){
    width: 80vw;
}
`


export const ContainerInputs=styled.div`
display: flex;
flex-direction: column;


`

export const ContainerButtons=styled.div`
margin-top: 30px;
display: flex;
button{
    border: none;
    border-radius: 12px;
    margin-left:5px;
    margin-right:5px;
    font-size: 20px;
    color: white;


    &{
        cursor: pointer;
    }
}
.btn-calcular{
    box-shadow: 5px 5px #195913;
    width: 90%;
    padding: 12px;
    background-color: green;
}
.btn-reset{
    padding: 12px;
    flex:1;
    box-shadow: 5px 5px #dedfe3;
}

`


export const ContainerResult=styled.div`
padding: 12px;
display: flex;
flex-direction: column;
margin-top: 70px;
background-color: #eee;
box-shadow: 5px 5px #c1c2c9;
min-height: 100px;
border-radius: 15px;
font-size:18px;
align-items: center;

div{
    margin-top: 10px;
}
`
