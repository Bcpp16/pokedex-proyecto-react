import React from 'react'
import './header.css'


function Header({showData, dataDefault, listPokemones}) {

    const onChangeInput = (e) =>{
        let textInput = e.target.value;

        if (textInput == '') {
            return dataDefault();
        }

        const filter = listPokemones.filter((list) => {
            if (list.name.includes(textInput)) {
                return true; 
            }else{
                return false;
            }
    
        });

        showData(filter);
    };


  return (
    <div>
      <div className='logo'>
        <img className='img-logo' src="/public/assets/Pokebola.png" />
        <p className='txt-logo'>Pokedex</p>
      </div>
    <div>
      <div className='container-search'>
      <input 
        className="search"
        placeholder="Search bar"
        onChange={onChangeInput}
        />
       
      </div>
    </div>
    </div>
  )
}

export default Header