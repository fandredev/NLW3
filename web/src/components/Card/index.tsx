import React from 'react'

import PenIcon from '../../assets/icons/pen.png'
import TrashIcon from '../../assets/icons/trash.png'
import { WrapperCard } from './styled'

import { Map, TileLayer, Marker } from 'react-leaflet'
import MapIcon from "../../utils/mapIcon";

interface CardProps {
  name: string;
  latitude: number;
  longitude: number;

}
export default function Card({ name, latitude = -23.5429886, longitude = -46.7575315 } : CardProps){
  return (
    <WrapperCard>
      <aside>
         <Map
            center={[latitude,longitude]}
            zoom={16}
            style={{ width: '50%', height: 280, borderRadius: '20px' }}
            dragging={false}
            touchZoom={false}
            zoomControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />
            <Marker interactive={false} icon={MapIcon} position={[latitude,longitude]} />
          </Map>
      </aside>
      <footer>
        <span>{name}</span>

        <div>
          <button>
            <img src={PenIcon} alt="Editar um orfanato"/>
          </button>
          <button>
          <img src={TrashIcon} alt="Deletar um orfanato"/>
          </button>
        </div>

      </footer>
    </WrapperCard>
  )
}
