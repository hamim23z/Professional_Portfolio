"use client";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export function CardExperience() {
  return (
    <>
      <Card
        sx={(theme) => ({
          margin: "auto",
          marginBottom: theme.spacing(5),
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          position: "relative",
          maxWidth: "90%",
          width: "100%",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          transition: "transform 0.4s",
          "&:hover": {
            transform: "scale(1.05)",
            border: "1px solid #5F409C",
            [theme.breakpoints.up("md")]: {
              transform: "scale(1.1)",
            },
          },
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
            maxWidth: 800,
          },
          mx: "auto",
        })}
      >
        <CardMedia
          component="div"
          sx={(theme) => ({
            width: 190,
            height: 190,
            borderRadius: "50%",
            backgroundColor: "#151312",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            [theme.breakpoints.up("md")]: {
              marginLeft: "10px",
              marginRight: "auto",
            },
          })}
        >
          <Image
            src="/doris_logo.png"
            alt="DORIS Logo"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%", paddingTop: "10px" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit", flex: 1 }}>
          <Typography
            variant="subtitle2"
            color="#fff"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            NYC Department of Records | July 2024 - Jan 2025
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "900",
              marginBottom: "0.35em",
              fontFamily: "Kanit",
            }}
          >
            Software Engineer Intern
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginBottom: 2,
              fontSize: "0.8rem",
              letterSpacing: "0.00938em",
              fontFamily: "Kanit",
            }}
          >
            Devised a Python-based website monitoring system deployed with
            Docker on Azure, reducing downtime and false alerts through
            automated issue detection and self-service recovery. Developed a
            custom PDF compression and linearization script using GhostScript
            and JavaScript, reducing file sizes by 60% and improving page load
            times for web-based document delivery systems. Revamped the
            company’s internal website using Jinja, HTML, and CSS, delivering a
            modern, accessible design aligned with user feedback and workplace
            requirements, resulting in a 40% increase in active users.
          </Typography>
        </CardContent>
      </Card>

      {/* Second Card */}
      <Card
        sx={(theme) => ({
          margin: "auto",
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          position: "relative",
          maxWidth: "90%",
          width: "100%",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          transition: "transform 0.4s",
          "&:hover": {
            transform: "scale(1.05)",
            border: "1px solid #002FA8",
            [theme.breakpoints.up("md")]: {
              transform: "scale(1.1)",
            },
          },
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
            maxWidth: 800,
          },
        })}
      >
        <CardMedia
          component="div"
          sx={(theme) => ({
            width: 190,
            height: 190,
            borderRadius: "50%",
            backgroundColor: "#151312",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            [theme.breakpoints.up("md")]: {
              marginLeft: "10px",
              marginRight: "auto",
            },
          })}
        >
          <Image
            src="/nycddc_logo.png"
            alt="DDC Logo"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%", paddingTop: "10px" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit" }}>
          <Typography
            variant="subtitle2"
            color="#fff"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            NYC Department of Design and Construction | June 2023 - Oct 2023
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "900",
              marginBottom: "0.35em",
              fontFamily: "Kanit",
            }}
          >
            Software Engineer & IT Intern
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginBottom: 2,
              fontSize: "0.8rem",
              letterSpacing: "0.00938em",
              fontFamily: "Kanit",
            }}
          >
            Created a Python-based hash file to securely generate and store
            hardware IDs from Surface laptops, streamlining the reimaging and
            software update process across the organization. Led a
            cross-functional team to execute a system-wide rollout of Surface
            laptops and mobile devices, overseeing reimaging, software updates,
            and hardware replacements to ensure a smooth and efficient
            deployment. Assisted with hardware setup and deployment across the
            building, connecting devices to secure networks, configuring
            workstations, and supporting employee moves and relocations.
          </Typography>
        </CardContent>
      </Card>

      {/* Third Card */}
      <Card
        sx={(theme) => ({
          margin: "auto",
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          position: "relative",
          maxWidth: "90%",
          width: "100%",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          transition: "transform 0.4s",
          "&:hover": {
            transform: "scale(1.05)",
            border: "1px solid #5E1010",
            [theme.breakpoints.up("md")]: {
              transform: "scale(1.1)",
            },
          },
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
            maxWidth: 800,
          },
        })}
      >
        <CardMedia
          component="div"
          sx={(theme) => ({
            width: 190,
            height: 190,
            borderRadius: "50%",
            backgroundColor: "#151312",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            [theme.breakpoints.up("md")]: {
              marginLeft: "10px",
              marginRight: "auto",
            },
          })}
        >
          <Image
            src="/trademark_logo.png"
            alt="Trademark Logo"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%", paddingTop: "10px" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit" }}>
          <Typography
            variant="subtitle2"
            color="#fff"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            Trademark Services | July 2021 - June 2023
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "900",
              marginBottom: "0.35em",
              fontFamily: "Kanit",
            }}
          >
            Software Developer
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginBottom: 2,
              fontSize: "0.8rem",
              letterSpacing: "0.00938em",
              fontFamily: "Kanit",
            }}
          >
            Designed a multi-tiered real-time alert system using Python and
            JavaScript to track and deliver sneaker and clothing release
            notifications, including drop times, locations, and raffles.
            Contributed to pull requests and system testing efforts using Git
            and PyTest, writing unit tests and conducting stress tests to ensure
            code quality, identify bottlenecks, and validate performance under
            certain conditions. Enhanced the platform by integrating new
            functionality that led to increased monthly subscriptions and
            improved user retention.
          </Typography>
        </CardContent>
      </Card>

      {/*Fourth Card*/}
      <Card
        sx={(theme) => ({
          margin: "auto",
          marginTop: theme.spacing(5),
          marginBottom: theme.spacing(5),
          borderRadius: theme.spacing(2),
          transition: "0.3s",
          position: "relative",
          maxWidth: "90%",
          width: "100%",
          overflow: "initial",
          background: "#151312",
          color: "#ffffff",
          border: "1px solid #ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: theme.spacing(2),
          transition: "transform 0.4s",
          "&:hover": {
            transform: "scale(1.05)",
            border: "1px solid #FE6F29",
            [theme.breakpoints.up("md")]: {
              transform: "scale(1.1)",
            },
          },
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            paddingTop: theme.spacing(2),
            maxWidth: 800,
          },
        })}
      >
        <CardMedia
          component="div"
          sx={(theme) => ({
            width: 190,
            height: 190,
            borderRadius: "50%",
            backgroundColor: "#151312",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexShrink: 0,
            [theme.breakpoints.up("md")]: {
              marginLeft: "10px",
              marginRight: "auto",
            },
          })}
        >
          <Image
            src="/fyllan_logo.png"
            alt="Fyllan Logo"
            layout="fill"
            objectFit="cover"
            style={{ borderRadius: "100%", paddingTop: "10px" }}
          />
        </CardMedia>
        <CardContent sx={{ fontFamily: "Kanit" }}>
          <Typography
            variant="subtitle2"
            color="#fff"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: 12,
              marginBottom: "0.875em",
            }}
          >
            Fyllan | Oct 2020 - Feb 2021
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontWeight: "900",
              marginBottom: "0.35em",
              fontFamily: "Kanit",
            }}
          >
            Web Development Intern
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginBottom: 2,
              fontSize: "0.8rem",
              letterSpacing: "0.00938em",
              fontFamily: "Kanit",
            }}
          >
            Created an interactive reservation system with real-time updates
            using JavaScript and AJAX, enhancing user experience and
            contributing to a 30% increase in online bookings for Fyllan
            restaurants. Integrated third-party APIs using JavaScript’s fetch to
            check table availability and suggest best reservation times,
            enhancing the site’s interactivity and usability.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
