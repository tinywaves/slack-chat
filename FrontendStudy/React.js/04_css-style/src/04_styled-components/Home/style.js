import styled from 'styled-components'

export const HomeStyle = styled.div`
  color: #f00;
  font-size: 50px;
  .start {
    background-color: #ff0;
  }
  span {
    &:hover {
      color: #008000;
    }
    &::after {
      content: '&::after';
    }
  }
`
export const DivEndStyle = styled.div`
  color: ${props => props.theme.themeColor};
  text-decoration: ${props => props.theme.textDecoration};
`