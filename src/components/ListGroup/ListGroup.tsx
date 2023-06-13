import { useState } from "react";
import styled from "styled-components";
import { Project } from "../Project";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "#eee" : "transparent")};
`;

interface Props {
  projects: Project[];
  heading: string;
  onSelectItem: (project: Project) => void;
}

function ListGroup({ projects, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    // </>{projects.length === 0 && <p>There are no items in the list</p>}
    <>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <List component="nav" aria-label="selection list">
          {projects.map((project, index) => (
            <ListItemButton
              selected={index === selectedIndex}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(project);
              }}
            >
              <ListItemText primary={project.name} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </>
  );
}

export default ListGroup;
