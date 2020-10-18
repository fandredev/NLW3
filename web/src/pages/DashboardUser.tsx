import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Sidebar from '../components/Sidebar'
import api from '../services/api'

import { WrapperDash } from '../styles/pages/dash'

interface OrphanageProps {
  id: number;
  name: string
  longitude: number
  latitude: number
}

export default function DashboardUser(){
  const [getOrphanages, setGetOrphanages] = useState<OrphanageProps[]>([])

  useEffect(() => {
    async function getOrphanages(){
      try {
        await api('orphanages').then(response => setGetOrphanages(response.data))
      } catch (error) {
        console.log('Opa, deu erro!')
      }
    }
    getOrphanages()
  }, [])
  return (
    <>
      <Sidebar />
        <WrapperDash>
        <h2>Orfanatos Cadastrados</h2>
        {getOrphanages.map(({ id, name, latitude, longitude }) => (
          <Card key={id} latitude={latitude} longitude={longitude} name={name} />
        ))}
      </WrapperDash>
    </>
  )
}
