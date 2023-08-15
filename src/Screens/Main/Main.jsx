import React from 'react'
import { Clock, Weather, Quotes } from '../../Comps'
import "./Main.css"

const Main = ({userName}) => {
    return (
        
            <div className='main'>
                <div>
                    <Weather />
                </div>
                <div className='flex-center flex-col'>
                    <Clock userName={userName}/>
                </div>
                <div>
                    <Quotes />
                </div>

            </div>
        
    )
}
export { Main }