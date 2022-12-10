import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <div className="home-page__container" area="content">
      <div className="my-image" />
      <div className="header">
        <span className="welcome">Viaja con Paula Morielli</span>
        <p className="welcome__detail">
          Destinos disponibles a todo el pais
        </p>
      </div>
    </div>
  );
}
