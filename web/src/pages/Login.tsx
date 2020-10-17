import React, { useState } from 'react'
import logo from '../assets/images/map-marker.svg'
import happyText from '../assets/images/happyText.png'

import { WrapperApplication, Section, FormContainer } from '../styles/pages/login'

import arrowLeft from '../assets/icons/Arrow.png'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <WrapperApplication>
      <Section>
        <img src={logo} alt="Happy" />
        <img src={happyText} alt="Happy" id="happyText" />
          <span>Jaguaré</span>
          <span>São Paulo</span>
      </Section>
      <FormContainer>
        <>
        </>
        <form action="">
          <header>
            <button type="button">
              <img src={arrowLeft} />
            </button>
          </header>
          <h2>Fazer Login</h2>
          <label htmlFor="email">E-mail</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
                placeholder=''
              />
            <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={event => setPassword(event.target.value)}
                placeholder=''
              />
              <aside>
                <input
                  type="checkbox"
                  defaultChecked={rememberMe}
                  onChange={event => setRememberMe(event.target.checked)}
                  name="checkbox"
                  id="checkbox"
                />
                <span>Lembrar-me</span>
                <span>Esqueci minha senha</span>
              </aside>
              <button type="button">
                Entrar
              </button>
            </form>
      </FormContainer>
    </WrapperApplication>
  )
}
