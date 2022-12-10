import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProject } from "../../services/index";
import "./ItemDetailContainer.css";

export default function ItemDetailContainer() {
  const [projectData, setProjectData] = useState(null);
  const { project } = useParams();

  useEffect(() => {
    getProject(project).then((projectData) => {      
      setProjectData(projectData);
    });
  }, [project]);

  return (
    <>
      {projectData ? (
        <div className="project__container">
          <div className="project-name"><h4>{projectData.name}</h4></div>
          <div className="project-detail">{projectData.detail}</div> 
                 
          
        </div>
      ) : (
        <p>Loading Packs</p>
      )}
    </>
  );
}
