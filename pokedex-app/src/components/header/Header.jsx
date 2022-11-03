import React from "react";
import "./header.css";


function Header({ showData, dataDefault, listPokemones }) {
  const onChangeInput = (e) => {
    let textInput = e.target.value;

    if (textInput == "") {
      return dataDefault();
    }

    const filter = listPokemones.filter((list) => {
      if (list.name.includes(textInput)) {
        return true;
      } else {
        return false;
      }
    });

    showData(filter);
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
            className="search"
            placeholder="Buscar"
            onChange={onChangeInput}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
