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
            Engineered a Python-based website monitoring system deployed with
            Docker on Azure, increasing service uptime and reducing false
            positives by automating issue detection and service recovery.
            Developed a custom PDF compression and linearization script using
            Ghostscript and JavaScript, achieving a 60% reduction in file sizes
            and improving page load times for web-based document delivery
            systems. Revamped the company’s internal website using Jinja,
            JavaScript, HTML, and CSS, delivering a modern, accessible, and
            responsive design tailored to user needs and workflows.
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
            Developed a Python-based hash file system to extract hardware IDs
            from Surface laptops, enabling secure access and streamlined
            software updates across the organization. Managed a cross-functional
            team to execute a full system rollout, including device reimaging,
            software updates, and hardware replacements as needed, ensuring
            smooth deployment across the organization. Diagnosed and patched
            system vulnerabilities and set up user and support accounts to
            ensure secure, functional access across hundreds of laptops and
            mobile devices.
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
            Designed a multi-tiered Discord bot using Python and JavaScript to
            deliver real-time sneaker and clothing release alerts, including
            drop times, locations, and raffles. Optimized the platform by
            integrating new features that led to an increase in monthly
            subscriptions and improved customer retention through user insights.
            Participated in code reviews, pull requests, and system testing
            throughout the full development lifecycle.
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
            using JavaScript and AJAX, leading to a 30% increase in online
            bookings for Fyllan restaurants. Integrated third-party APIs using
            JavaScript&apos;s fetch API, enhancing website functionality with
            features like real-time restaurant updates and social media feeds.
            Worked alongside senior developers to design UI components and
            refine them based on accessibility guidelines.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
