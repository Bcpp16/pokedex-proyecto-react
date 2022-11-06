import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

    <Link to={"app"}>
          <button className="back-Btn">
            Ir a la Pokedex
          </button>
        </Link>

    </div>
  )
}

export default Home