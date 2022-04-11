/**
 * Rerrebe e renderiza uma lista de projetos (resposta de uma API)
 *
 * @param {Object[]} projects
 */

import { Code, ForkRight } from "@mui/icons-material";
import { Box, Divider, Link, Typography } from "@mui/material";

export default function UserProjects({ projects }) {
  function renderProjects(projects) {
    return projects.map((project) => {
      return (
        <Box key={project.name}>
          <Link
            href={project.clone_url}
            target="_blank"
            variant="h3"
            underline="hover"
          >
            {project.name}
          </Link>
          <br />
          <Typography variant="paragraph">{project.description}</Typography>
          <Box sx={{ display: "flex", marginTop: "5px" }}>
            <Code /> {project.language}
            <ForkRight /> {project.forks}
          </Box>
          <Divider sx={{ marginBottom: "25px", marginTop: "25px" }} />
        </Box>
      );
    });
  }

  return <>{renderProjects(projects)}</>;
}
