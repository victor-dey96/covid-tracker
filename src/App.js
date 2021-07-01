import React, {useEffect, useState} from 'react'
import './App.css';
import './index.css'
import InputSelect from './Components/InputSelect';
import axios from './Components/axios' ;
import Cards from './Components/Cards';

function App() {
  const baseURL = 'https://covid19.mathdro.id/api'
    const [deaths, setDeaths] = useState()
    const [confirmed, setConfirmed] = useState()
    const [recovered, setRecovered] = useState()
    const [lastUpdate, setLastUpdate]=  useState('')
    

useEffect(() => {
    async function fetchData(){
        const request = await axios.get(baseURL)
        setDeaths(request.data.deaths.value)
        setConfirmed(request.data.confirmed.value)
        setRecovered(request.data.recovered.value)
        setLastUpdate(request.data.lastUpdate)
        
        // Pulling API data into states
    }    
  fetchData();
}, [lastUpdate])

useEffect(() => {
  async function fetchData(){
      const confirmedData = await axios.get(`${baseURL}/countries/India`)
      
      //Need to make the last bit of the URL based on a function which will come from the select option
      console.log(confirmedData.data.confirmed.value)
      
  }
  fetchData()
}, [])
// This should return the confirmed value for any country. Country=input, confirmed cases=output

  return (
    <div className='App'>
      <img src='https://www.outsystems.com/Forge_BL/rest/ComponentThumbnail/GetURL_ComponentThumbnail?ProjectImageId=37512' alt='Covid 19 Tracker'></img>
      <div className='card_container'>
      <Cards 
          condition='Deaths' 
          bgColor= 'red' 
          data={deaths} 
          style={{ backgroundImage: 'linear-gradient( to right, #ff9068, #ff4b1f)' }}
          
       />
      <Cards 
          condition='Confirmed'
          bgColor= 'green' 
          data={confirmed}
          style={{ backgroundImage: 'linear-gradient( to right, #36D1DC, #5B86E5)' }}
      />
      <Cards 
          condition='Recovered' 
          bgColor= 'blue' 
          data={recovered}
          style={{ backgroundImage: 'linear-gradient( #56ab2f, #a8e063)' }}
      />
     <InputSelect />
      </div>
     
     {/* Adding separate cards for each condition (i.e deaths, recovered, and confirmed) */}
    </div>
  )
}

export default App
