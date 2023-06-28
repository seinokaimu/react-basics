import { useEffect, useState } from "react";
import { Counter, TextInput, ToggleButton } from "./components/index";

function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState('Seino')
  const ids = ['Seino', 'aws', 'facebook', 'google', 'sns' ]
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setName(data.name)
      })
      .catch(error => {
        console.error(error)
      })
  },[id])

  return (
    <div>
      <p>{id}の名前は{name}です</p>
      <button onClick={getRandomId}>IDを変更</button><br/>
      <p>ToggleButton</p>
      <ToggleButton /><br/>
      <p>Counter</p>
      <Counter /><br/>
      <p>TextInput</p>
      <TextInput /><br/>
    </div>
  );
}
export default App;