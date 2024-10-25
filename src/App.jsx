import {useState} from 'react';
function App(){
  const[celsius,setCelsius] = useState('');
  const[fahrenheit,setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const CelsiusValue = e.target.value;
    setCelsius(CelsiusValue);
    if(CelsiusValue === '') {
      setFahrenheit('');
    }
    else{
      setFahrenheit(((CelsiusValue * 9)/5+32).toFixed(2));
    }
  };

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = e.target.value;
    setFahrenheit(fahrenheitValue);
    if(fahrenheitValue === ''){
      setCelsius('');
    }
    else{
      setCelsius((((fahrenheitValue - 32)*5)/9).toFixed(2));
    }
  };


  return(
    <div style={{textAlign:'center',marginTop:'30px',background:'#945',fontStyle:'italic',fontWeight:'bolder',display:'flex',height:'100vh',flexDirection:'column',justifyContent:'center'}}>
      <h1 style={{fontSize:'3rem',marginBottom:'20px'}}>TEMPERATURE CONVERTER</h1>
      <div style={{marginBottom:'15px'}}>
        <label style={{fontSize:'2rem'}}>
          Celsius:
          <input type='number' value={celsius}  
          onChange={handleCelsiusChange} placeholder='Enter Celsius' style={{margin:'20px',padding:'20px',border:'1px solid #ccc',borderRadius:'4px',width:'200px'}}
          
          />
        </label>
      </div>
      <div>
        <label style={{fontSize:'2rem'}}>
          Farenheit:
          <input type='number' value={fahrenheit}
          onChange={handleFahrenheitChange} placeholder='Enter Fahrenheit' style={{margin:'20px',padding:'20px',border:'1px solid #ccc',borderRadius:'4px',width:'200px'}}
          />
        </label>
      </div>
    </div>
  );
}
export default App;