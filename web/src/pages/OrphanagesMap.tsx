import React, { useEffect, useState } from 'react'

import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import mapMarkerImg from '../assets/images/map-marker.svg'
import { FiPlus, FiArrowRight } from 'react-icons/fi'


import '../styles/pages/orphanages-map.css'
import MapIcon from '../utils/mapIcon'
import api from '../services/api'


interface Orpanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string
}

function OrphanagesMap(){
  const [orphanages, setOrphanages] = useState<Orpanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data)
    })
  }, [])

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>
            Muitas crianças estão esperando a sua visita :)
          </p>
        </header>
        <footer>
          <strong>Jaguaré</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <Map center={[-23.5429886,-46.7575315]} zoom={15} style={{ width: '100%', height: '100%' }}>
        {/* <TileLayer url="https://api.mapbox.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

        {orphanages.map(({ id, latitude, longitude, name }) => {
          return (
             <Marker position={[latitude, longitude]} icon={MapIcon} key={id}>
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                {name}
                <Link to={`orphanages/${id}`}>
                  <FiArrowRight size={20} color={"#fff"} />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
          <FiPlus size={32} color={'#fff'} />
      </Link>

    </div>
  )
}
export default OrphanagesMap
