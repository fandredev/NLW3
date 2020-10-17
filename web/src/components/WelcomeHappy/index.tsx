import React from 'react'
import logo from '../../assets/images/map-marker.svg'
import happyText from '../../assets/images/happyText.png'

import { Section } from './styled'

export default () => {
  return (
      <Section>
        <img src={logo} alt="Happy" />
        <img src={happyText} alt="Happy" id="happyText" />
          <span>Jaguaré</span>
          <span>São Paulo</span>
      </Section>
  )
}
