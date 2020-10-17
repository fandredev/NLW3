import React, { ReactNode } from 'react'
import { Button } from './styled'

type TypeUnion = 'button' | 'submit'

interface PropsButton<T, U> {
  children: T,
  type?: U,
}
type Button = Readonly<PropsButton<ReactNode, TypeUnion>>

export default function ButtonBlue({ children, type = 'button' } : Button) {
    return (
      <Button type={type}>
         {children}
      </Button>
    )
}
