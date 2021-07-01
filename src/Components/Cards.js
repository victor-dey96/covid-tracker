import React, {useState, useEffect} from 'react'
import axios from './axios'
import './Cards.css'

function Cards({condition, data, bgColor, style}) {
    const [baseClass, setBaseClass] = useState('')
    // useEffect(() => {
    //     if (condition==='deaths'){
    //         setBaseClass('deaths');
    //     } else if (condition==='recovered') {
    //         setBaseClass('recovered');
    //     } else {
    //         setBaseClass('confirmed')
    //     }
    // }, [])
    return (
        
        // <div className={`${condition === 'deaths'} ? deaths ` }>
        
        <div className= 'Cards' style={style} >
            <div className='cards_text'>
                <h2>{condition}</h2>
                <h3>{data}</h3>
                <h4>Hello World</h4> 
           </div>
           
        </div>
    )
}

export default Cards
