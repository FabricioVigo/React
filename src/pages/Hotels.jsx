import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHotel } from '@fortawesome/free-solid-svg-icons'
import "./Hotels.css";
export default function Hotels() {
  return (
    <div className="about-me__container" area="content">
      <div className="links">
        <Link to="me"><FontAwesomeIcon icon={faPlane} /> Viajes</Link> 
        <Link to="free"><FontAwesomeIcon  icon={faHotel}/> Hoteles</Link>
      </div>
      <Outlet />
    </div>
  );
}
