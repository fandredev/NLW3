import styled from 'styled-components'

export const WrapperGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 100vh;
  background:#FF669D;
  color: #fff;

  > aside, figure {
    align-self: center;
  }

  > aside {
    text-align: center;
    padding: 0 12rem;
    font-family: 'Nunito';
    > h2 {
      font-size: 80px;
    }
    > button {
      display: block;
      width: 100%;
      margin: 3rem 0;
      background: #D6487B;
      border-radius: 20px;
      color: #fff;
      font-weight: 800;
      border: 1px solid #D6487B;
      height: 8vh;
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover {
        opacity: .7
      }
    }
  }
`
