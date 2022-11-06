import { useState } from "react";
import React from "react";
import "./header.css";

function Header({
  showData,
  dataDefault,
  listPokemones,
  orderAlfa,
  orderId,
  state,
}) {
  const [showButton, setShowButton] = useState(true);
  const onChangeInput = (e) => {
    let textInput = e.target.value.toLowerCase();

    if (textInput == "") {
      return dataDefault();
    }

    const filter = listPokemones.filter((list) => {
      if (list.name.toLowerCase().includes(textInput)) {
        return true;
      } else {
        return false;
      }
    });

    showData(filter);
  };
  const onClickAlfa = () => {
    if (state == true) {
      orderAlfa();
    } else {
      orderId();
    }
    setShowButton(false);
  };

  const onClickId = () => {
    if (state == false) {
      orderId();
    } else {
      orderAlfa();
    }
    setShowButton(true);
  };

  return (   
    <div className="cont1">
      <div className="cont-header">
        <div className="cont-logo">
          <img className="img-logo" src="/public/assets/Pokebola.png" />
          <span className="txt-logo">Pokédex</span>
        </div>
        <div className="cont-search">
          <input
            type="search"
            className="search"
            placeholder="Buscar"
            onChange={onChangeInput}
          />

          {showButton ? (
            <button className="btn-order" onClick={onClickAlfa}>
             # ↓ 
            </button>
          ) : (
            <button className="btn-order"  onClick={onClickId}>
              AZ ↓
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
