import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.colorBorder};
  padding: 16px;
`
export const LinkButton = styled.a`
  background-color: ${(props) => props.theme.backgroundColorButton};
  text-decoration: none;
  padding: 7px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 14px;
  display: inline-block;
  margin-top: 24px;
`
