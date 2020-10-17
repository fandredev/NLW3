import React, { ChangeEvent } from 'react'
import { InputStyle } from './styled'

type TypeProps = 'text' | 'email' | 'password'

interface InputProps<T,U> {
  type: T
  name?: U
  id?:U
  value: U
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  placeholder?:U,
}
type Anything = Readonly<InputProps<TypeProps, string>>

export default function Input({
  type = 'text', name, id, value = '', onChange, placeholder
}: Anything) {
  return (
     <InputStyle
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
  )
}
