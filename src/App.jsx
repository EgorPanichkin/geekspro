import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Pockemon from './components/Pockemon'

function App() {
    const [data, setData] = useState()

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')
        console.log(response.data.results);
        setData(response.data.results)
      }
      fetchData()
    }, [])


  return (
    <div className='wrapper'>
      {data && data.map((item, index) => {
        return(
          <Pockemon data={item} key={index} name={item.name}/>
        )
      })}
    </div>
  )
}

export default App
