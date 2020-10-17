import styled, { css } from 'styled-components'

export const WrapperApplication = styled.main`
  display: grid;
  grid-template-columns: 1fr 35%;
  height: 100vh;
  width: 100vw
`
export const Section = styled.section`
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-flow: column wrap;

  > img[id="happyText"] {
    margin: 1rem 0 6rem 0;
  }
  > span {
    font-size: Nunito;
    font-size: 24px;
  }
`


export const FormContainer = styled.aside`
  padding: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#000;
  background: #fff;
  font-family: Nunito;

  > form {
    display: flex;
    flex-flow: column;
    text-align: left;
    justify-content: center;
    height: 100%;
    width: 100%;

    > header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
        > button {
          border-radius: 16px;
          border-color: transparent;
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
          &:hover{
            opacity: 0.6
          }
          > img {
            background: #EBF2F5;
            border-radius: 16px;
          }
        }
    }
    > h2 {
      color: #5C8599;
      font-weight: bold;
      margin: 1rem 0;
    }
    > label {
      color:#8FA7B2;
      font-size: 1rem;
      margin: 0.3rem 0;
    }
    > input {
      height: 50px;
      border-radius: 20px;
      border: 1px solid #D3E2E5;
      text-align: center;
    }
    > aside {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: center;
      margin: 3rem 0;
      > span {
        color:#8FA7B2;
        font-size: 1rem;
      }
    }
    > button[type="button"] {
      background: #37C77F;
      border-radius: 20px;
      height: 50px;
      border: 1px solid #37c77f;
      color: #fff;
      cursor: pointer;

      &:hover {
        opacity: .7
      }
    }
  }
`

