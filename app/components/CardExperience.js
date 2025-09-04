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
            fill
            style={{
              objectFit: "cover",
              borderRadius: "100%",
              paddingTop: "10px",
            }}
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
            Devised a Python based website monitoring system deployed with
            Docker on Azure, reducing the downtime and the number of false
            alerts through automated issue detection and self-service recovery.
            Developed a custom PDF compression and linearization script using
            GhostScript and JavaScript, reducing file sizes by 60% and improving
            page load times for web-based document delivery systems. Revamped
            the company’s internal website using Jinja, HTML, and CSS,
            delivering a modern, accessible design aligned with user feedback
            and workplace requirements, resulting in a 40% increase in active
            users.
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
            fill
            style={{
              objectFit: "cover",
              borderRadius: "100%",
              paddingTop: "10px",
            }}
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
            Created a Python script that extracts unique hardware IDs from
            Surface laptops, generates secure hashes of these IDs and stores
            them for device management, thus streamlining the reimaging and
            software update process. Led a cross functional team to execute a
            system wide rollout of Surface laptops and mobile devices,
            overseeing reimaging, software updates, and hardware replacements to
            ensure smooth deployment. Supported IT operations by assisting with
            workstation setups and moves, resolving user account issues,
            updating software, and providing in person troubleshooting across
            various departments.
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
            fill
            style={{
              objectFit: "cover",
              borderRadius: "100%",
              paddingTop: "10px",
            }}
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
            Designed a real-time alert system using Python and JavaScript to
            track and deliver sneakers, clothing, and accessories release
            notifications, including drop times, retail locations, and raffle
            events. Contributed to pull requests and system testing using Git
            and PyTest by writing unit tests, performing stress tests, and
            validating performance under certain situations to ensure code
            quality and identify bottlenecks. Enhanced the platform by
            integrating new functionality that led to increased monthly
            subscriptions and improved user retention.
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
            fill
            style={{
              objectFit: "cover",
              borderRadius: "100%",
              paddingTop: "10px",
            }}
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
            restaurants. Integrated multiple third-party APIs using JavaScript’s
            fetch method to check real-time restaurant table availability and
            suggest reservation times, improving the site’s interactivity, and
            customer experience. Conducted A/B testing on reservation interface
            features to analyze user behavior and optimize the booking flow,
            resulting in measurable UX improvements.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
