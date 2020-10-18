import styled, { css } from 'styled-components'


const flexPropertiesFullCenter = css`
  align-items: center;
  justify-content: center;
  display: flex;
`
export const WrapperApplication = styled.main`
  display: grid;
  grid-template-columns: 1fr 35%;
  height: 100vh;
  width: 100vw;
`


export default flexPropertiesFullCenter
