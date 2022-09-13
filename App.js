import React from 'react';
import './assets/App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {


  const [data,setData]=useState({})
  const [location , setLocation] = useState('')


  const url =`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=54b784fd7758d2f24a7b3ca0becd65c8`



  const searchLocation = (event)=>{
    if(event.key === 'Enter'){

    axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
    setLocation('')
  }
   
  }
    return (
       <div className = "App" >

          <section className = "top-sec">

            <div className = "city">
              <input type="text" value={location} onChange={event=>setLocation(event.target.value)}
              onKeyPress={searchLocation} placeholder="Enter Location"
              />

              <div>
              <p className = "city-name">{data.name}</p>
              {data.main ? <h1 className = "temp">{data.main.temp.toFixed()}°F</h1> : null}
              </div>
            </div>

            <div className = "status">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>

          </section>

          <section className = "bottom-sec">

              <section>
              <div className="div">
              {data.main ? <h2 >{data.main.temp.toFixed()}°F</h2> : null}
                <p>Feels Like</p>
              </div>
              <div className="div">
              {data.main ? <h2>{data.main.humidity}%</h2> : null}
                <p>Humidity</p>
              </div>
              <div className="div">
              {data.wind ? <h2>{data.wind.speed.toFixed()} MPH</h2> : null}
                <p>Winds</p>
              </div>
            
              </section>

          </section>

        </div>
    );
}

export default App;