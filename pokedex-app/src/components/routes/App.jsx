import { useState } from "react";
import Header from "../header/Header";
import pokemones from "../../data";
import Main from "../main/Main";
import Stras from "../background/Stars";

function App() {
  const [list, setList] = useState(pokemones);
  const [button, setButton] = useState(true);

  const showData = (data) => {
    setList(data);
  };

  const dataDefault = () => {
    setList(pokemones);
  };

  const orderAlfa = () => {
    const result = [...list].sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    showData(result);
    setButton(false);
  };

  const orderId = () => {
    const result = [...list].sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    });
    showData(result);
    setButton(true);
  };

  return (
    <div className="App">
      <Stras />
      <Header
        showData={showData}
        dataDefault={dataDefault}
        listPokemones={list}
        orderAlfa={orderAlfa}
        orderId={orderId}
        state={button}
      />

      <Main listPokemones={list} />
    </div>
  );
}

export default App;
