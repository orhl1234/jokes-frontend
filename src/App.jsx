import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isLoading, setisLoading] = useState(false)
  const [joke, setJoke] = useState({})
  useEffect(() => {
    async function fetchJokes() {
      setisLoading(true)
      const res = await fetch("http://localhost:3000/randomjoke")
      const data = await res.json()
      setisLoading(false)
      if (!isLoading)
        setJoke(data)
    }
    fetchJokes();
  }, []);
  
  if (isLoading) {
    return <div>Loading...</div>; 
  }
  return (
    <>
      {`joke id: ${joke.id} : ${joke.text}`}
    </>
  )
}

export default App
