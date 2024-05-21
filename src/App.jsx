import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { GlobalStyle } from './components/GlobalStyle'
import { Wrapper } from './components/Wrapper'
import { Title } from './components/Title'
import { Input, InputBox } from './components/Input'

function App() {
  const [count, setCount] = useState(0)
  const { register, handleSubmit, setValue, watch } = useForm()
  const onSubmit = (data) => console.log('1111', data)

  const inputNameValue = watch('firstName', '')

  const handleInputNameChange = (e) => {
    const { value } = e.target
    if (value.length <= 30) {
      setValue('firstName', value)
    }
  }

  return (
    <Wrapper>
      <GlobalStyle />
      <div className="first-block">
        <Title>Заполните форму</Title>
      </div>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputBox>
          <label htmlFor="firstName">ФИО</label>
          <Input
            {...register('firstName', {
              required: true,
              minLength: 10,
              maxLength: 30,
            })}
            value={inputNameValue}
            onChange={handleInputNameChange}
            placeholder="Заполнить"
            type="text"
            id="firstName"
          />
        </InputBox>

        <InputBox>
          <label htmlFor="second">Рейтинг</label>
          <Input
            {...register('rating', {
              required: true,
              min: 0,
              max: 100,
            })}
            placeholder="Введите значение от 1 до 100"
            type="number"
            id="second"
          />
        </InputBox>

        <div>
          <input type="checkbox" />
          <label htmlFor="second">Имеется аккредитация</label>
        </div>

        <InputBox>
          <label htmlFor="second">Желаемая сумма</label>
          <Input
            {...register('sum', {
              required: true,
            })}
            placeholder="0"
            type="number"
          />
        </InputBox>

        <InputBox>
          <label htmlFor="second">Категория</label>
          <select name="ff" id="a">
            <option value="" disabled selected>
              Выбрать
            </option>
            <option value="1">Категория 1</option>
            <option value="2">Категория 2</option>
            <option value="3">Категория 3</option>
            <option value="4">Категория 4</option>
            <option value="5">Категория 5</option>
          </select>
        </InputBox>

        <InputBox>
          <label htmlFor="second">Комментарий</label>
          <Input
            {...register('comment', {
              maxLength: 200,
            })}
            placeholder="Заполнить"
            type="text"
          />
        </InputBox>

        <label style={{ height: '136px', border: '1px solid' }} htmlFor="file">
          Нажмите на область или перетащите файлы сюда. 5 МБ максимальный размер{' '}
          <input style={{ display: 'none' }} type="file" id="file" />
        </label>

        <h4>Итоговая сумма {count}</h4>

        <button type="submit">Отправить</button>
      </form>
    </Wrapper>
  )
}

export default App
