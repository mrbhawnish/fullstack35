import { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [message, setMessage ] = useState("")


    useEffect(() => {
      fetch('/api')
      .then(res => res.json())
      .then(data => {  
        console.log(data) 
        setMessage(data.message)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])
  return (
    <div className="App">
      <h1>hi there</h1>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
