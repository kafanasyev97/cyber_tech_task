import styled from 'styled-components'

const ErrorMessage = styled.div`
  color: #ff4b24;
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 18px;
`
export const Error = ({ children }) => {
  return <ErrorMessage>{children}</ErrorMessage>
}
