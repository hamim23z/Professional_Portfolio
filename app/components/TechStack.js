"use client";
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMui,
  SiPython,
} from "react-icons/si";
import { FaCoffee } from "react-icons/fa";

export function TechStack() {
  const techStack = [
    { name: "HTML", icon: <SiHtml5 size={40} />, color: "#E34F26" },
    { name: "CSS", icon: <SiCss3 size={40} />, color: "#1572B6" },
    { name: "JS", icon: <SiJavascript size={40} />, color: "#F7DF1E" },
    { name: "React", icon: <SiReact size={40} />, color: "#61DAFB" },
    { name: "Python", icon: <SiPython size={40} />, color: "#306998" },
    { name: "Java", icon: <FaCoffee size={40} />, color: "#007396" },
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
