import React, {useState, useEffect} from 'react'

import axios from './axios'
function InputSelect() {

    const [countries, setCountries] = useState([]) //array of countries
    const [inputValue, setInputValue] = useState('') //to store the input value as a state
    const [totalData, setTotalData] = useState() //to get the final confirmed value of individually selected country
    const baseURL = 'https://covid19.mathdro.id/api'
    useEffect(() => {
        async function fetchData(){
            const countryValue = await axios.get(`${baseURL}/countries/`)
           
            setCountries(countryValue.data.countries.map(
                function(country){
                    return country
                }
                // This returns an array of name of all countries
                
            ))
            
            
        }
        
        fetchData()
    }, [])


    useEffect(() => {
        async function fetchData(){
            const countryData = await axios.get(`${baseURL}/countries/${inputValue}`)
            setTotalData(countryData.data)
            
            
        }
        fetchData()
    }, [inputValue])

console.log(totalData)

const handleChange = (e) => {
    setInputValue(e.target.value) //stores the selected option as inputValue
}
    return (
        <div>
            
            <select onChange={handleChange} >
                
                {countries.map((option) => {
                    return <option value={option.name}>{option.name}</option>
                        
                })}
            </select>
             
        </div>
    )
}

export default InputSelect
// <option 
                        //     onChange={{handleChange}}
                        //     selected= {index===0}
                        //     value={option.iso3}> {option.name} 
                        // </option>