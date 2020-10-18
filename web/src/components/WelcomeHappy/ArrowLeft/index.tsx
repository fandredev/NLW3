import React from 'react'

import arrowLeft from '../../../assets/icons/Arrow.png'
import { Header } from './styled'
import { Link } from 'react-router-dom'

export default function ArrowLeftHeader () {

  return (
     <Header>
       <Link to="/login">
        <button type="button">
          <img src={arrowLeft} />
        </button>
       </Link>
    </Header>
  )
}
