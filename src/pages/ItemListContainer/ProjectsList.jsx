import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Card from "../../components/Card/Card";
import { getAllProjects } from "../../services/index";
import { isEmpty } from "../../utils/array";
import "./ProjectsList.css";

export default function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // TODO: Make fake API call to get projects
    getAllProjects().then((projects) => setProjects(projects));
  }, []);

  return (
    <div className="projects-list__container" area="content">
      {isEmpty(projects) ? (
        <p className="loader">Loading travells...</p>
      ) : (
        <div className="projects-list">
          {projects.map((project) => (
            <Card key={project.id}>
              <h4>{project.name}</h4>
              <img src={project.img}/>
              <div className="project-tech-list">
                  <Link to={`${project.id}`}><button>Ver Mas</button></Link>
              </div>
            </Card>
          ))}
        </div>
      )}
      <div className="project-detail">
        <Outlet />
      </div>
    </div>
  );
}
