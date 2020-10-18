import React from 'react'
import girlScared from '../../assets/images/girlScared.png'

import { WrapperGrid } from './styled'

interface Props<T> {
  readonly name: T
}

export default function ExcludeOrphanage({ name }: Props<string>){
  return (
    <WrapperGrid>
        <aside>
          <h2>Excluir!</h2>
          <span>Você tem certeza que quer excluir Orf. Esperança? </span>
          <button>Voltar para o mapa</button>
        </aside>

        <figure>
            <img src={girlScared} alt="Garotinha assustada em imagem ilustrativa."/>
        </figure>
    </WrapperGrid>
  )
}
