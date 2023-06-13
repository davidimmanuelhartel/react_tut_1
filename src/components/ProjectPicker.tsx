import { MouseEvent, useState } from "react";
import { Project } from "./Project";
import ListGroup from "./ListGroup/ListGroup";
import OverviewCard from "./OverviewCard";
import { MOCK_PROJECTS } from "./MockProjects";

export default function ProjectPicker() {
  const [selectedItem, setSelectedItem] = useState(MOCK_PROJECTS[0]);

  const handleClick = (project: Project) => {
    setSelectedItem(project);
    console.log(project);
  };
  const projects: Project[] = MOCK_PROJECTS;

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ListGroup
        projects={projects}
        heading="Projects"
        onSelectItem={handleClick}
      />
      <OverviewCard project={selectedItem} />
    </div>
  );
}
