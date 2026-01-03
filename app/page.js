"use client";
import { Box, Typography, useMediaQuery, useTheme, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { CardHighlight } from "./components/CardHighlight";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import EmailIcon from "@mui/icons-material/Email";
import BarChartIcon from "@mui/icons-material/BarChart";
import { CardExperience } from "./components/CardExperience";
import { CardBlog } from "./components/CardBlog";
import { TechStack } from "./components/TechStack";
import { TechStack2 } from "./components/TechStack2";
import { TechStack3 } from "./components/TechStack3";

export default function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        bgcolor: "#090807",
      }}
    >
      {/* left */}
      <Box
        sx={{
          flex: { xs: "none", md: "0 0 380px" },
          minWidth: { xs: "100%", md: "320px" },
          maxWidth: { md: "420px" },
          width: { xs: "100%", md: "33%" },
          position: { xs: "static", md: "fixed" },
          top: 0,
          left: 0,
          height: { xs: "auto", md: "100vh" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: { xs: "flex-start", md: "center" },
          textAlign: "center",
          p: { xs: 2, md: 4 },
          zIndex: 10,
          bgcolor: "#141210",
          borderRight: { md: "2px solid #232220" },
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#151312",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: { xs: "230px", sm: "300px" },
            width: "100%",
            maxWidth: "280px",
            borderRadius: 3,
            border: "2px solid #fff",
            p: 2,
            mb: 2,
          }}
        >
          <Image
            src={"/github_cool.jpg"}
            alt="Profile picture"
            width={isMobile ? 100 : 140}
            height={isMobile ? 100 : 140}
            style={{
              borderRadius: "100%",
              border: "2px solid #777",
            }}
            priority
          />
          <Typography
            variant="h6"
            sx={{
              color: "white",
              textTransform: "uppercase",
              fontFamily: "Kanit",
              fontWeight: 700,
              pt: 2,
              fontSize: { xs: "1rem", md: "1.25rem" },
            }}
          >
            Hamim Choudhury
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "white",
              fontFamily: "Kanit",
              fontWeight: 400,
              mt: 1,
              mb: 2,
              px: 1,
              fontSize: { xs: "0.8rem", md: "1rem" },
            }}
          >
            A software engineer with a passion to develop projects, big or
            small.
          </Typography>
        </Box>

        <Typography
          variant="h5"
          sx={{ color: "#e0e0e0", fontWeight: 900, mb: 2, letterSpacing: 1 }}
        >
          Software Engineer
        </Typography>
        <Typography
          sx={{
            maxWidth: "90vw",
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            lineHeight: 1.7,
            mb: 2,
            color: "#e0e0e0",
          }}
        >
          Hi! I&apos;m Hamim Choudhury, a Computer Science student at The City
          College of New York. My coding journey began with MIT&apos;s Scratch
          and evolved through building websites to full-stack engineering. I
          love projects that solve real-world problems and get used daily.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
          <Link href="https://www.linkedin.com/in/hamimc/" target="_blank">
            <LinkedInIcon sx={{ fontSize: 28, color: "#fff" }} />
          </Link>
          <Link href="https://github.com/hamim23z" target="_blank">
            <GitHubIcon sx={{ fontSize: 28, color: "#fff" }} />
          </Link>
          <Link href="https://www.kaggle.com/hamimc" target="_blank">
            <BarChartIcon sx={{ fontSize: 28, color: "#fff" }} />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1gA6p9NY3NiKOYzAZVh4C8AeCriufof38/view?usp=sharing"
            target="_blank"
          >
            <FileCopyIcon sx={{ fontSize: 28, color: "#fff" }} />
          </Link>
          <Link href="mailto:hamimc232@gmail.com" target="_blank">
            <EmailIcon sx={{ fontSize: 28, color: "#fff" }} />
          </Link>
        </Stack>
      </Box>

      {/* main */}
      <Box
        sx={{
          flex: 1,
          ml: { xs: 0, md: "420px" },
          width: { xs: "100%", md: "calc(100vw - 420px)" },
          bgcolor: "#11100e",
          minHeight: "100vh",
          p: { xs: 2, md: 6 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
        }}
      >
        {/* personal projects */}
        <Box sx={{ width: "100%", maxWidth: "900px", mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              pb: 3,
              color: "#fff",
              borderBottom: "1px solid #222",
            }}
          >
            Current Projects
          </Typography>
          <Box sx={{ width: "100%", py: 2 }}>
            <CardHighlight />
          </Box>
        </Box>

        {/* work and internship experience */}
        <Box sx={{ width: "100%", maxWidth: "900px", mb: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, textAlign: "center", color: "#fff", pb: 2 }}
          >
            Professional Experience
          </Typography>
          <CardExperience />
        </Box>

        {/* personal projects */}
        <Box sx={{ width: "100%", maxWidth: "900px", mb: 4 }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, textAlign: "center", color: "#fff", pb: 2 }}
          >
            Personal Projects
          </Typography>
          <CardBlog />
        </Box>

        {/* tech Stack */}
        <Box sx={{ width: "100%", maxWidth: "900px", mb: 2 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              textAlign: "center",
              color: "#fff",
              pt: 3,
              pb: 2,
            }}
          >
            Tech Stack
          </Typography>
          <TechStack />
          <TechStack2 />
          <TechStack3 />
        </Box>

        {/* spacer for mobile */}
        {isMobile && <Box sx={{ height: "40px" }} />}
      </Box>
    </Box>
  );
}
