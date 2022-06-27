import styled from "styled-components";

export const Container = styled.div`
    width:90%;
    height: 75%; 
    margin:64px ;
    
    padding: 12px;
    padding-bottom: 64px;
    overflow: visible;
    background-color: white;
    
    display:flex;
    justify-content: left;
    
    flex-direction: column;
    backdrop-filter: blur(8px) saturate(172%);
    -webkit-backdrop-filter: blur(8px) saturate(172%);
    background-color: rgba(11, 14, 23, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);

    @media (max-width:768px){
        margin: 100px 48px;
        width : 80%;
    }
`

export const Heading = styled.h1`
    margin:24px;
    text-align: justify;
    color: whitesmoke;
    font-size:48px;
    
    @media (max-width:768px){
        text-align:center;
    }
`

export const StyledForm = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    @media (max-width:768px){
        flex-direction: column;
    }
`

export const Label = styled.div`
font-size:24px;
color:white;
&:hover{
    text-decoration: underline ;
    transition: text-decoration 0.1ms ease-in;
}
`

export const FormComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const InputNumber = styled.input.attrs({type:'text'})`
    width: 35vw;
    height: 40vh;
    text-align: justify;
    vertical-align: middle;
    font-size: 48px;
    word-wrap: break-word;
    
    padding: 8px;
    margin: 8px;
    border-radius: 8px;
    resize: none;   
    text-align-last: center;
    word-break: break-word;
    @media (max-width:768px){
        width: 80%;
        height:30vh;
        margin:16px 8px;
    }
`

export const ConvertButton = styled.button`
    font-size: 18px;
    padding: 12px 16px;
    border-radius: 5px;
    margin: 8px;
    background-color: #318CE7;
    font-weight: 800;
    &:hover{
        background-color: whitesmoke;
        color:#318CE7;
        cursor:pointer;
        
    }
    @media (max-width:768px){
        width:40vw;
    }
    
`
export const OutputFormComponent = styled(FormComponent)`
    @media (max-width:768px){
        margin-top: 24px;
    }`

export const OutputNumber = styled(InputNumber)`
    white-space: pre-wrap;
`
export const ResetButton=styled(ConvertButton)`
    background-color: whitesmoke;
    color: #318CE7;
    &:hover{
        background-color: #318CE7;
        color:whitesmoke;
        cursor:pointer;
        
    }

`;