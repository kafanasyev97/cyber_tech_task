import { useState } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  console.log('33')
  const [count, setCount] = useState(0)
  const { register, handleSubmit } = useForm()

  return (
    <div className="container">
      <h1>Заполните форму</h1>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
        action=""
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="first">ФИО</label>
          <input type="text" id="first" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="second">Рейтинг</label>
          <input type="text" id="second" />
        </div>

        <div>
          <input type="checkbox" />
          <label htmlFor="second">Имеется аккредитация</label>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="second">Желаемая сумма</label>
          <input type="text" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="second">Категория</label>
          <select name="ff" id="a">
            <option value="1">as</option>
            <option value="2">sa</option>
          </select>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="second">Комментарий</label>
          <input type="text" />
        </div>

        <input type="file" />

        <h4>Итоговая сумма {count}</h4>

        <button type="submit">Отправить</button>
      </form>
    </div>
  )
}

export default App
