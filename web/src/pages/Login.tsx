import React, { ChangeEvent, useState } from 'react'
import { WrapperApplication } from '../utils/cssProperties'

import { FormContainer } from '../styles/pages/login'

import WelcomeHappy from '../components/WelcomeHappy'
import ArrowLeftHeader from '../components/WelcomeHappy/ArrowLeft'
import Button from '../components/WelcomeHappy/Button'
import Input from '../components/WelcomeHappy/Input'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <WrapperApplication>
      <WelcomeHappy />
      <FormContainer>

        <form action="">
          <ArrowLeftHeader />
          <h2>Fazer Login</h2>
            <label htmlFor="email">E-mail</label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
              />
            <label htmlFor="password">Senha</label>
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
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
              <Button type="button">
                Entrar
              </Button>
            </form>
      </FormContainer>
    </WrapperApplication>
  )
}
