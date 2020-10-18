import React, { ChangeEvent, useState } from 'react'
import WelcomeHappy from '../components/WelcomeHappy'
import ButtonBlue from '../components/WelcomeHappy/Button'
import Input from '../components/WelcomeHappy/Input'
import { FormContainer } from '../styles/pages/login'
import { WrapperApplication } from '../utils/cssProperties'
import ArrowLeftHeader from '../components/WelcomeHappy/ArrowLeft'


export default function ResetPassword(){
  const [password, setPassword] = useState('')
  const [confirm_password, setConfirmPassword] = useState('')

  return (
    <>
       <WrapperApplication>
        <WelcomeHappy />
        <FormContainer>
          <form>
            <ArrowLeftHeader />
            <h2>Redefinição de senha</h2>
            <p>
             Escolha uma nova senha para você acessar o dashboard do Happy
            </p>
            <label htmlFor="password">Nova Senha</label>
            <Input
              type="text"
              id="password"
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            />
            <label htmlFor="confirm_password">Repetir senha</label>
            <Input
              type="password"
              id="confirm_password"
              value={confirm_password}
              onChange={(event: ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value)}
            />
            <ButtonBlue>Enviar</ButtonBlue>
          </form>
        </FormContainer>
    </WrapperApplication>
    </>
  )
}
