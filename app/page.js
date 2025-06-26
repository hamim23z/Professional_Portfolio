"use client";
import {
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { CardHighlight } from "./components/CardHighlight";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import EmailIcon from "@mui/icons-material/Email";
import { CardExperience } from "./components/CardExperience";
import { CardBlog } from "./components/CardBlog";
import { TechStack } from "./components/TechStack";
import { TechStack2 } from "./components/TechStack2";
import { TechStack3 } from "./components/TechStack3";

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >
        {/* left side of screen */}
        <Box
          sx={{
            width: isMobile ? "100%" : "35%",
            position: isMobile ? "static" : "fixed",
            height: isMobile ? "auto" : "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: isMobile ? "flex-start" : "center",
            alignItems: "center",
            textAlign: "center",
            padding: isMobile ? 2 : 4,
            zIndex: 1,
            paddingTop: isMobile ? "100px" : "inherit",
            paddingBottom: isMobile ? "40px" : "inherit",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#151312",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: isSmallScreen ? "200px" : "250px",
              maxWidth: "300px",
              width: "100%",
              borderRadius: "10px",
              border: "2px solid #fff",
              padding: 2,
              marginBottom: 2,
            }}
          >
            <Image
              src={"/github_cool.jpg"}
              alt="Profile picture"
              width={isSmallScreen ? 120 : 160}
              height={isSmallScreen ? 120 : 160}
              style={{
                borderRadius: "100%",
              }}
            />

            <Typography
              variant="h6"
              sx={{
                color: "white",
                textTransform: "uppercase",
                textAlign: "center",
                fontFamily: "Kanit",
                fontWeight: 700,
                paddingTop: "16px",
                fontSize: isSmallScreen ? "1rem" : "1.25rem",
              }}
            >
              Hamim Choudhury
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: "white",
                fontFamily: "Kanit",
                textAlign: "center",
                fontWeight: 400,
                marginTop: "8px",
                lineHeight: "20px",
                marginBottom: "40px",
                fontSize: isSmallScreen ? "0.75rem" : "0.875rem",
              }}
            >
              A software engineer with a passion to develop projects, big or
              small.
            </Typography>
          </Box>

          <Typography
            variant={isSmallScreen ? "h5" : "h4"}
            sx={{
              fontWeight: 900,
              marginBottom: 2,
            }}
          >
            Software Engineer
          </Typography>

          <Typography
            sx={{
              maxWidth: "600px",
              fontSize: isSmallScreen ? "0.9rem" : "1rem",
              lineHeight: 1.7,
              paddingX: isSmallScreen ? 1 : 0,
            }}
          >
            Hi! I&apos;m Hamim Choudhury, a Computer Science student at The City
            College of New York. My journey of coding started in middle school,
            where I took a computer course and used MIT&apos;s Scratch as my
            first language. And that is how my passion for coding began. I
            started off by building simple websites and I explored how to code
            myself. I now code on a regular basis, learning a multitude of
            languages and using them very often.
            <br></br> <br></br>I started off as a frontend engineer only, but
            have now become a full-stack engineer. I love to build projects that
            can solve real-world problems and ones that people will use on a
            regular basis.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              marginTop: "16px",
            }}
          >
            <Link
              href="https://www.linkedin.com/in/hamimc/"
              target="_blank"
              passHref
              style={{ color: "white", textDecoration: "none" }}
            >
              <LinkedInIcon
                sx={{ fontSize: isSmallScreen ? "24px" : "30px" }}
              />
            </Link>
            <Link
              href="https://github.com/hamim23z"
              target="_blank"
              passHref
              style={{ color: "white", textDecoration: "none" }}
            >
              <GitHubIcon sx={{ fontSize: isSmallScreen ? "24px" : "30px" }} />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1eqir7Pk9XA5zsYX-yhQsTkfxRm1LI10P/view?usp=sharing"
              target="_blank"
              passHref
              style={{ color: "white", textDecoration: "none" }}
            >
              <FileCopyIcon
                sx={{ fontSize: isSmallScreen ? "24px" : "30px" }}
              />
            </Link>
            <Link
              href="mailto:hamimc232@gmail.com"
              target="_blank"
              passHref
              style={{ color: "white", textDecoration: "none" }}
            >
              <EmailIcon sx={{ fontSize: isSmallScreen ? "24px" : "30px" }} />
            </Link>
          </Box>
        </Box>

        {/* right side of screen */}
        <Box
          sx={{
            width: isMobile ? "100%" : "65%",
            marginLeft: isMobile ? 0 : "35%",
            height: isMobile ? "auto" : "100vh",
            overflowY: "auto",
            padding: isSmallScreen ? 2 : 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: isSmallScreen ? 3 : 4,
            paddingTop: isMobile ? "20px" : "120px",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: "800px" }}>
            <Typography
              variant={isSmallScreen ? "h6" : "h5"}
              sx={{
                fontWeight: 700,
                paddingBottom: isSmallScreen ? "20px" : "40px",
                textAlign: "center",
              }}
            >
              Current Projects
            </Typography>
            <Box
              sx={{
                minHeight: isSmallScreen ? "200px" : "300px",
                width: "100%",
                maxWidth: "800px",
              }}
            >
              <CardHighlight />
            </Box>
          </Box>

          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            sx={{
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Professional Experience
          </Typography>
          <Box sx={{ width: "100%", maxWidth: "800px" }}>
            <CardExperience />
          </Box>

          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            sx={{
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Personal Projects
          </Typography>
          <Box sx={{ width: "100%", maxWidth: "800px" }}>
            <CardBlog />
          </Box>

          <Typography
            variant={isSmallScreen ? "h6" : "h5"}
            sx={{
              fontWeight: 700,
              textAlign: "center",
              paddingTop: "40px",
            }}
          >
            Tech Stack
          </Typography>
          <TechStack />
          <TechStack2 />
          <TechStack3 />

          {isMobile && <Box sx={{ height: "40px" }}></Box>}
        </Box>
      </Box>
    </>
  );
}
