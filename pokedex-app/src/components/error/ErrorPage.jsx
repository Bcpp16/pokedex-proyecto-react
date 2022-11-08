import { Link } from "react-router-dom";

import "./error404.css";

function ErrorPage() {
  return (
    <div className="cont">
      <article className="error404">

        <section className="sorry-cont">
          <h1 className="sorry">SORRY</h1>
        </section>

        <section className="cont-error-img">
          <h2>4</h2>
          <img className="img-error" src="/public/assets/Pokebola.png" />
          <h2>4</h2>
        </section>

        <h3>Page not found</h3>

        <Link to={"/app"}>
          <button className="btn-back-error">Back Home</button>
        </Link>

      </article>
    </div>
  );
}

export default ErrorPage;
