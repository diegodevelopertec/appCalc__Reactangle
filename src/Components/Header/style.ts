import styled from "styled-components";


export const container=styled.div`
display: flex;
padding: 25px;
justify-content: space-around;
width: 100vw;



.title-app{
color:  #15122e;
font-size: 25px;
@media screen and (max-width:430px) {
   font-size: 18px;
   text-align: center;
   margin-top: 15px;
 }

}

.git{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
background-color: #15122e;
border-radius: 12px;
box-shadow: 0 0 10px #5a0366;

        a{
            text-decoration: none;
        }
        img{
            height: 30px;
            width: 30px;
            margin-left: 10px;
        }


        &:hover{
            cursor: pointer;
            background-color: #1e1947;
            box-shadow:  0 0 12px #272163;
        }

 @media screen and (max-width:700px) {
  margin-top: 15px;
 }



}

@media screen and (max-width:700px) {
    flex-direction: column;
 }




`