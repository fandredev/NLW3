import React from 'react'

import arrowLeft from '../../../assets/icons/Arrow.png'
import { Header } from './styled'

export default function ArrowLeftHeader () {
  return (
     <Header>
      <button type="button">
        <img src={arrowLeft} />
      </button>
    </Header>
  )
}
