import { useState, useEffect } from 'react'
import Map from './componets/Map'
import Loader from './componets/Loader'
import Header from './componets/Header'

function App() {
  const [eventData, setEventData] =useState([])
  const [loading, setLoading] =useState(false)
  
  useEffect(() => {
    const fetchEvents= async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const {events} = await res.json()
    
      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])
  
  return (
    <div>
      <Header /> 
      {!loading? <Map eventData={eventData} /> :<Loader/>  }
    </div>
  );
}

export default App;
