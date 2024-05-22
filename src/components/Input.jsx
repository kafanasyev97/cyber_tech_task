import styled from 'styled-components'

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const InputCheckbox = styled.div`
  & input {
    position: absolute;
    left: -9999px;
  }

  & label {
    display: inline-block;
    position: relative;
    padding-left: 28px;
    line-height: 20px;
    cursor: pointer;
  }

  & label:before {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 16px;
    height: 16px;
    border: 1.5px solid #9394aa;
    background-color: #ffffff;
    border-radius: 4px;
  }

  & label:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: url('./checkbox.svg') no-repeat center / cover;
  }

  & input:checked + label:after {
    opacity: 1;
  }

  & input:checked + label:before {
    opacity: 0;
  }

  & input:not(:checked) + label:after {
    opacity: 0;
  }

  & input:not(:checked) + label:before {
    opacity: 1;
  }
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
  return (
    <>
      <InputStyled {...props}></InputStyled>
    </>
  )
}
