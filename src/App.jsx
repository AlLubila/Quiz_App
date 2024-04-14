import './index.css'
import { Start } from "./Templates/Start"
import { Gaming } from './Templates/Gaming'
import { Finished } from './Templates/Finished'
import { useState } from 'react'
import { useEffect } from 'react'

export const App = () => {

// Set initially true welcome state
const [welcome, setWelcome] = useState(true)

// Set initially false start state
const [start, setStart] = useState(false)

// Set initially lastQuestion to false 
const [lastQuestion, setLastQuestion] = useState(false)

// Start Button event
const handleStart = () => {
// set false welcome state to hide START COMPONENT
    setWelcome(false)

// set true start state to make appear GAMING COMPONENT
    setStart(true)
}



    return (
        <>
        {welcome && <Start handleStart={handleStart}/>}
       {start && <Gaming setLastQuestion={setLastQuestion}/>}
       {lastQuestion && <Finished/>}
        </>
    )
}