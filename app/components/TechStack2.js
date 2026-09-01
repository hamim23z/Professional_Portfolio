"use client";
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiMongodb,
} from "react-icons/si";

export function TechStack2() {
  const techStack = [
    { name: "Next.js", icon: <SiNextdotjs size={40} />, color: "#fff" },
    { name: "Node.js", icon: <SiNodedotjs size={40} />, color: "#339933" },
    { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#4FAA41" },
    { name: "HTML", icon: <SiHtml5 size={40} />, color: "#E34F26" },
    { name: "CSS", icon: <SiCss3 size={40} />, color: "#1572B6" },
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
