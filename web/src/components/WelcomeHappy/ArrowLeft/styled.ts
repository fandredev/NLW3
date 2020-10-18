import styled from 'styled-components'
import flexPropertiesFullCenter from '../../../utils/cssProperties'

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
    > a button {
      border-radius: 16px;
      border-color: transparent;
      width: 50px;
      height: 50px;
      ${flexPropertiesFullCenter};
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
`
