
//=============HOOKS===================
import { useState } from "react";

//=============IMPORT ROUTER===================
import { useNavigate } from "react-router-dom";

//==============IMPORT STYLE====================
import { HiArrowLongLeft } from "react-icons/hi2";
import "./header.css";


function Header({ showData, dataDefault, listPokemones, orderAlfa, orderId }) {
  const [showButton, setShowButton] = useState(true);

  const navigate = useNavigate();

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

  const onClickOrder = () => {
    if (showButton == true) {
      orderAlfa();
      setShowButton(false);
    } else {
      orderId();
      setShowButton(true);
    }
  };

  return (
    <div className="cont1">

      <button className="btn-home" onClick={() => navigate("/")}>
        <HiArrowLongLeft />
      </button>

      <article className="cont-header">
        <section className="cont-logo">
          <img className="img-logo" src="/public/assets/Pokebola.png" />
          <span className="txt-logo">Pokédex</span>
        </section>

        <section className="cont-search">
          <input
            type="search"
            className="search"
            placeholder="Search for Pokemon"
            onChange={onChangeInput}
          />

          <button className="btn-order" onClick={onClickOrder}>
            {showButton ? "#" : "AZ"}
          </button>
          
        </section>
      </article>
    </div>
  );
}

export default Header;
