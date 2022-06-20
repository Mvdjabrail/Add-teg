import { useState } from "react";
import "./app.css"

function App() {
  const [text, setText] = useState('')
  const [textError, setTextError] = useState('Поле ввода не может быть пустым')
  const [textDirty, setTextDirty] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [textArr, setTextArr] = useState([])
  const [clas, setClass] = useState(false)

  const textHandler = (e) => {
    setText(e.target.value)
    if (!e.target.value) {
      setTextError('Поле ввода не может быть пустым')
      setDisabled(true)
      setTextDirty(true)
      setClass(true)

    } else {
      setTextDirty(false)
      setDisabled(false)
      setClass(false)
    }
  }

  const handleText = () => {
    if (!text) {
      setTextError('Поле ввода не может быть пустым')
      setTextDirty(true)
      setDisabled(true)
      setClass(true)
    } else {
      setClass(false)
    }
  }

  const handleClick = () => {
    if (text[0] !== ' ') {
      setTextArr([...textArr, text])
      setText('')
    }
  }

  const btnClick = (index) => {
    setTextArr(
      textArr.filter((item, id) => {
        if (id === index) {
          return false
        }
        return true
      })
    )
  }

  return (
    <div className="app">
      <form onClick={(e) => e.preventDefault()}>
        <input
          className={clas ? 'input1' : 'input'}
          type="text"
          onChange={(e) => textHandler(e)}
          value={text}
          placeholder="Введите текст"
          onBlur={handleText}
          name='name'
        />
        <button
          className={disabled ? '' : 'btn'}
          disabled={disabled}
          onClick={handleClick}
        >Отправить</button>
      </form>
      <div className="divError">
        {textDirty && (
          <div style={{ color: 'red' }}>{textError}</div>
        )}
      </div>
      <div className="divMap">
        {textArr.map((item, index) => {
        return <div className="divTeg"
          key={index}>
          {item}
          <button
            className="btn2"
            onClick={(e) => btnClick(index)}>X</button></div>
      })}
      </div>
    </div>
  );
}

export default App;
