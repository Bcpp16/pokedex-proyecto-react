import { useState } from 'react'
import Header from '../header/Header';
import pokemones from '../../data'
import Main from '../home/Main';


function App() {

  const [list, setList] = useState(pokemones);


  const showData = (data) =>{
    setList(data);
  }

  const dataDefault = () =>{
    setList(pokemones);
  }


  return (
    <div className="App">

      <Header 
      showData={showData}
      dataDefault={dataDefault}
      listPokemones={list}
      />

      <Main listPokemones={list}/>
    </div>
  )
}

export default App;
