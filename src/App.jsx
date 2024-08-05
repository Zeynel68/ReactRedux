import { useState } from 'react'
import { useSelector } from 'react-redux';

import './App.css'

function App() {


  const { value } = useSelector((store) => store.counter)
  console.log(value)
  return (
    <>

    </>
  )
}

export default App
