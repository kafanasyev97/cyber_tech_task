import styled from 'styled-components'

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const InputStyled = styled.input`
  height: 44px;
  padding: 10px 12px;
  border: ${(props) => (props.isError ? '1px solid #ff4b24' : 'none')};
  border-radius: 6px;

  &:focus {
    outline: none;
    border: 1px solid #228b62;
  }
`

export const Input = (props) => {
  console.log('555', props.isError)
  return <InputStyled {...props}></InputStyled>
}
