import { Link } from "react-router-dom";

//======Import Style======
import "./main.css";


function Main({ listPokemones }) {
  return (
    <div className="container-main">

      <article className="container-card">
        {/* listPokemones array traversal */}
        {listPokemones.length ? (
          listPokemones.map((pokemon) => {

            return (
              <Link to={`/pokemon/${pokemon.id}`} className="link">
                <section className="st-card">

                  <span className="id">{`#${pokemon.id}`}</span>
                  <img className="img-Poke" src={pokemon.image} />

                  <section className="bg-color" style={{ backgroundColor: pokemon.color }}>
                    <div className="nombre">{pokemon.name}</div>
                  </section>

                </section>
              </Link>
            );
          })
        ) : (
          <p className="txt-main">No se han encontrado Pokemones</p>
        )}
        
      </article>
      <section className="footer"></section>
    </div>
  );
}

export default Main;
