"use client";
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import {
  SiDocker,
  SiFlask,
  SiJavascript,
  SiReact,
  SiPython,
} from "react-icons/si";
import { FaCoffee } from "react-icons/fa";

export function TechStack() {
  const techStack = [
    { name: "Python", icon: <SiPython size={40} />, color: "#306998" },
    { name: "JS", icon: <SiJavascript size={40} />, color: "#F7DF1E" },
    { name: "Docker", icon: <SiDocker size={40} />, color: "#2496ED" },
    { name: "Flask", icon: <SiFlask size={40} />, color: "#fff" },
    { name: "React", icon: <SiReact size={40} />, color: "#61DAFB" },
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
