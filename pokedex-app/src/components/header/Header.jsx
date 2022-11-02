import React from 'react'


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
      <div>
        <p>LOGO</p>
      </div>
    <div >
      <input 
        className="search"
        placeholder="Search bar"
        onChange={onChangeInput}
        />
        <p>Look for the robots. Please use capital letters at the beginning.</p>
    </div>
    </div>
  )
}

export default Header