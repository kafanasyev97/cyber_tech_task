import styled from 'styled-components'

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const InputStyled = styled.input`
  height: 44px;
`

export const Input = (props) => {
  console.log('22', props)
  return <InputStyled {...props}></InputStyled>
}
