import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Project } from "./Project";

interface Props {
  project: Project;
}

export default function OverviewCard({ project }: Props) {
  const firstLetter = project.name.charAt(0);
  //const avatarColor = colorMapping[firstLetter] || red[500];
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={project.imageUrl}
        title={project.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
