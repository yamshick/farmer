import React from "react";
import { Box, Typography } from "@mui/material";
import { VillageProject } from "./village-project";

export const VillageProjects = ({ villageProjects: projects }) => {
  return (
    <Box>
      <Typography variant="h4">Занятия</Typography>
      <Box>
        {projects.map((project, id) => (
          <VillageProject key={id} project={project} />
        ))}
      </Box>
    </Box>
  );
};
