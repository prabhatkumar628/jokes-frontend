import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState()

  useEffect(() => {
    axios.get("/api/data")
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])

  return (
    <>
      <h1>jokes</h1>
      {jokes && jokes.map((item, index) => (
        <div style={{ display: "flex" }}>
          <p>{item.joke}</p>
        </div>

      ))

      }


    </>
  )
}

export default App
