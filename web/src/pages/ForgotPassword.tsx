import React, { ChangeEvent, useState } from 'react'
import WelcomeHappy from '../components/WelcomeHappy'
import ArrowLeftHeader from '../components/WelcomeHappy/ArrowLeft'
import { WrapperApplication } from '../utils/cssProperties'

import Input from '../components/WelcomeHappy/Input'
import { FormContainer } from '../styles/pages/login'
import ButtonBlue from '../components/WelcomeHappy/Button'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  return (
    <WrapperApplication>
        <WelcomeHappy />
        <FormContainer>
          <form>
            <ArrowLeftHeader />
            <h2>Esqueci minha senha</h2>
            <p>
              Sua redefinição de senha será enviada para o e-mail cadastrado.
            </p>
            <label htmlFor="email">E-mail</label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            />
            <ButtonBlue>Enviar</ButtonBlue>
          </form>
        </FormContainer>
    </WrapperApplication>
  )
}
