"use client";
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import {
  SiDocker,
  SiMysql,
  SiJavascript,
  SiPython,
  SiPandas,
  SiScikitlearn
} from "react-icons/si";

export function TechStack() {
  const techStack = [
    { name: "Python", icon: <SiPython size={40} />, color: "#306998" },
    { name: "Pandas", icon: <SiPandas size={40} />, color: "#094c83eb" },
    { name: "Scikit", icon: <SiScikitlearn size={40} />, color: "#cd8615eb" },
    { name: "SQL", icon: <SiMysql size={40} />, color: "#4479A1" },
    { name: "Docker", icon: <SiDocker size={40} />, color: "#2496ED" },
    { name: "JS/TS", icon: <SiJavascript size={40} />, color: "#F7DF1E" },
  ];

  return (
    <Box
      sx={{
        marginTop: "10px",
        padding: "20px",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {techStack.map((tech, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#151312",
                borderRadius: "10px",
                border: "1px solid #fff",
                color: "white",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Box
                sx={{
                  color: tech.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                {tech.icon}
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {tech.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
