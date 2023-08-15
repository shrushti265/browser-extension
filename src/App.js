import { useState } from 'react'
import './App.css'
import { Onboard } from './Screens/index'
import { useBackgroundImage } from './hooks/useBackgroundImage'
import { Main } from './Screens/Main/Main';

function App() {
  const [userName, setUserName] = useState("");
  const [route, setRoute] = useState("Onboard");
  const { bgURL } = useBackgroundImage();
  return (
    <div className='App' style={{ backgroundImage: 
    `url(${bgURL})`, 
    backgroundSize: 'cover',
    opacity: 0.8
    }}>
      {route == "Onboard" && (
      <Onboard userName={userName} setUserName={setUserName} setRoute={setRoute}/>)}
      {route === 'main' && <Main userName={userName}/>}
    </div>
  )
}

export default App;
