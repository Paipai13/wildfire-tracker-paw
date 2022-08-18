import {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationsInfoBox from './LocationsInfoBox'

const Map = ({eventData, center, zoom}) => {
const [locationsInfo, setLocationInfo] = useState(null)

const markers =eventData.map(ev => {
    if(ev.categories[0].id === "wildfires") {
        return  <LocationMarker lat={ev.geometry[0].coordinates[1]} lng ={ev.geometry[0].coordinates[0]} onClick={() => setLocationInfo({ id: ev.id, title: ev.title})} />
    }
    return null
})

    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys={{key:'AIzaSyD5W7jkp-gJRBRiydl8dTfnwl7BpDY68cY'}}
            defaultCenter={center}
            defaultZoom ={zoom}>
                {markers}
            </GoogleMapReact>
            {locationsInfo && <LocationsInfoBox info={locationsInfo}/>  }
        </div>
    )
}
Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}
export default Map
