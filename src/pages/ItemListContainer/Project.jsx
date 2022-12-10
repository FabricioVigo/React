import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../services/index";
import "./Project.css";

export default function Project(props) {
  const [hotels, setHotels] = useState(null);
  const { project } = useParams();

  useEffect(() => {
    getProject(project).then((hotels) => {
      console.log(hotels);
      setHotels(hotels);
    });
  }, [project]);

  return (
    <>
      {hotels ? (
        <div className="project__container">
          <div className="project-name">{hotels.name}</div>
          <div className="project-detail">{hotels.detail}</div>
          <div className="project-link">
            <a href={hotels.repo.link}>{hotels.repo.link}</a>
          </div>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}
