import './index.css'
import { Start } from "./Components/Start"
import { Gaming } from './Components/Gaming'
import { Finished } from './Components/Finished'
import { useState } from 'react'
import { useEffect } from 'react'

export const App = () => {

// Set initially true welcome state
const [welcome, setWelcome] = useState(true)

// Set initially false start state
const [start, setStart] = useState(false)

// Set initially timer to 10
const [timer, setTimer] = useState(10)

// Start Button event
const handleStart = () => {
// set false welcome state to hide START COMPONENT
    setWelcome(false)

// set true start state to make appear GAMING COMPONENT
    setStart(true)
}

// set a setInterval to decrease Timer after each 1s
useEffect(()=>{
    if (start && timer > 0) {
        setInterval(() => {
            setTimer(prevTimer => prevTimer - 1)
        }, 1000);
    }
})




    return (
        <>
        {welcome && <Start handleStart={handleStart}/>}
       {start && <Gaming/>}
      {/*  <Finished/> */}
        </>
    )
}