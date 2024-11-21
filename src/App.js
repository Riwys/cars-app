import { useEffect, useState, useRef } from 'react';
import './App.css';
import Cars from './components/cars/cars';
import 'tachyons';

function App() {
  const [ carData, setCarData ] = useState([]);
  const [fetched, setFetched] = useState(false);
  const greaterSpeed = useRef();
  const lesserSpeed = useRef();
  const fetchCar = () => {
    fetch('https://cars-backend-qpcg.onrender.com', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        lesserSpeedToSent: lesserSpeed.current,
        greaterSpeedToSent: greaterSpeed.current
      })
    })
    .then(response => response.json())
    .then(dataReceived => {
      setCarData(dataReceived)
      setFetched(true)
    })
  }

  const greaterHandler = (event) => {
    const userInput = event.target.value;
    greaterSpeed.current = userInput;
  }

  const lesserHandler = (event) => {
    const userInput = event.target.value;
    lesserSpeed.current = userInput;
  }

  useEffect((dataReceived) => {
    console.log(carData, carData.rows, fetched);
  })
  return (
    <>
    { /*
    <div>
      <h1>Cars</h1>
      <h3>Show cars with speed greater than</h3>
      <input type='text' onChange={ greaterHandler }/>
      <h3>and lesser than</h3>
      <input type='text' onChange={lesserHandler }/>
      <button onClick = { fetchCar }>Show Cars</button>
      <Movies carData={ carData } fetched={ fetched }/>
      

      <h1>Show My Cars</h1>
      <div className='wrap'>
      <div className='fe'>
        <label htmlFor="from">Speed From</label>
        <input 
        className='m4 p4 fe' 
        type="text" 
        name="from"  
        id="from" 
        onChange={greaterHandler}
        />
      </div>
      <div className='fe'>
        <label htmlFor="to">To</label>
        <input  
        className='m4 p4 fe' 
        type="text" 
        name="to"  
        id="to" 
        onChange={lesserHandler}
        />
      </div>
      <button className='m4 p4' onClick={ fetchCar }>Show My Cars</button>
      <Cars carData={ carData } fetched={ fetched }/>
      </div>
      </div>
      */ }

      <article className="br2 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
        <main className="pa4 black-80">
        <div className="measure center">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f3 fw6 ph0 mh0">Show My Cars</legend>
        <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="from">Speed From</label>
        <input 
        className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="from"  
        id="from" 
        onChange={greaterHandler}
        />
        </div>
        <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">To</label>
        <input 
        className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" 
        type="text" 
        name="to"  
        id="to" 
        onChange={lesserHandler}
        />
        </div>
        </fieldset>
        <div className="">
        <input 
        onClick={ fetchCar }
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
        type="submit" 
        value="Show My Cars" 
        />
        </div>
        </div>
        </main>
        </article>
        <Cars carData={ carData } fetched={ fetched }/>
        </>

  );
}

export default App;
