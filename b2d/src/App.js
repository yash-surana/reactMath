
import './App.css';
import { useState } from 'react';
import {
  Container,
  Heading,
  StyledForm,Label,InputNumber,ConvertButton,OutputNumber,
  FormComponent, OutputFormComponent, ResetButton
} from "./styles.js";

function App() {

  const [binaryText, setBinaryText] = useState('');
  const [decimalText, setDecimalText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    if(binaryText.match(/^[0-1]+$/g) === null){
        setErrorMessage(`Enter 0 or 1 only, not ${binaryText}`)
        console.log(errorMessage)
    return;
    }

    setErrorMessage('');
    

    const binaryInReverse = binaryText.split('').map(str=> Number(str)).reverse();
    let decimalArray = 0;
    for(let i=0;i<binaryInReverse.length;i++){
      let dec = binaryInReverse[i]*(Math.pow(2,i));
      decimalArray+=dec;
      console.log(decimalArray);
    }

    setDecimalText(decimalArray)

}

const reset = () => {
  setBinaryText("");
  setErrorMessage("");
  setDecimalText("");
}


  return (
    <Container>
      <Heading>
        Convert Binary to Decimal 
      </Heading>
      <StyledForm>
        
        <FormComponent >
        <Label> Binary </Label>
          <InputNumber placeholder='Enter 0 or 1 only'  value={binaryText} onChange={e => setBinaryText(e.target.value)} /> 
          {errorMessage && <span style={{width:'100%', color:'red',padding:'12px', fontWeight:'800', fontSize:'30px'}}>{errorMessage}</span>}
           
          
        </FormComponent>
        
        <div style={{display:'flex', flexDirection:'column'}}>
        <ConvertButton type="submit" onClick={onFormSubmit}>Convert</ConvertButton>
        <ResetButton onClick={reset}>Reset</ResetButton>
        
        </div>
        <OutputFormComponent>
          <Label> Decimal </Label>
            <OutputNumber value={decimalText}  readOnly />
        </OutputFormComponent>
        
      </StyledForm>
      
      
    </Container>
  );
}

export default App;
