import styled, { css } from 'styled-components'
import flexPropertiesFullCenter from '../../utils/cssProperties'

export const FormContainer = styled.aside`
  padding: 4rem;
  ${flexPropertiesFullCenter};
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

    > p {
      color: #5C8599;
      font-size: 18px;
      margin-bottom: 2rem
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
  }
`

