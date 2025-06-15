// components/CardExperience.js
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";

// Component that renders all cards FOR EXPERIENCES
export function CardExperience() {
  return (
    <>
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
          mx: "auto"
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
            Developed a Python-based website monitoring system using Docker and Azure,
            increasing uptime by 15% and reducing false positives by 40% while enabling
            proactive issue resolution for critical web services. Created a custom script
            to compress PDF files efficiently, reducing file sizes by 60% and improving
            performance for web-based document delivery systems. Led a redesign of the
            internal company website, focusing on user-centric design principles to create
            a more efficient and visually appealing platform.
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
            from Surface laptops, enabling rapid ticket creation and
            streamlining vulnerability assessments. Led a cross-functional team
            in managing hundreds of devices—performing system updates,
            reimaging, and malware remediation—which resulted in a 25% reduction
            in downtime. Created user and support accounts on laptops and mobile
            devices to facilitate efficient device deployment and support
            operations.
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
            Designed a sophisticated multi-tiered Discord bot using Python and
            JavaScript to provide instant updates on sneaker and clothing
            releases, including essential details like location and timing.
            Optimized the software platform by integrating new features that led
            to an increase in monthly subscriptions and improved customer
            retention through valuable user insights. Facilitated pull requests,
            code reviews, and stress testing to ensure the quality of data
            throughout the Software Development Life Cycle.
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
            Created an interactive reservation system with real-time
            availability updates using JavaScript and AJAX, leading to a 30%
            increase in online bookings for Fyllan restaurants. Integrated
            third-party APIs using JavaScript&apos;s fetch API, enhancing
            website functionality with features like real-time restaurant
            updates and social media feeds. Collaborated with senior developers
            to design and implement interfaces, merging feedback to refine the
            UI/UX.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}