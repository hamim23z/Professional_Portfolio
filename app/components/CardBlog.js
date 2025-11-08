"use client";
import React, { useState } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { styled } from "@mui/material/styles";

const CarouselContainer = styled("div")({
  position: "relative",
  width: "100%",
  maxWidth: "800px",
  margin: "0 auto",
  overflow: "hidden",
});

const CarouselContent = styled("div")({
  display: "flex",
  transition: "transform 0.5s ease",
  width: "100%",
});

const NavigationButton = styled(IconButton)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  backgroundColor: "rgba(255, 255, 255, 0.5)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
});

export function CardBlog() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Engrnuity",
      description:
        "Engrnuity is a web based application that serves as a study website strictly for engineering students who go to CUNY colleges in New York. Users will be able to create flashcards, generate cards using AI, watch videos, take quizzes, gain access to past exams and textbooks, RateMyProfessor, etc. The waitlist for Engrnuity is live and changes are being made daily!",
      technologies:
        "Next.js, Node.js, React.js, Javascript, Typescript, PostgreSQL, Firebase, Material UI, Next Auth",
      status: "CURRENT PROJECT - MASSIVE CHANGES IN PLACE",
      link: "https://engrnuity.vercel.app/",
      buttonText: "SITE LIVE NOW",
      image: "/engrnuity_circle.png",
    },
    {
      id: 2,
      title: "FinTrack",
      description:
        "Managing your money isn’t always easy. Expenses pile up, it’s hard to remember what you spent where, and tracking it all can be confusing. FinTrack puts everything in one place. See all your expenses, filter your spending by category, and get a clear view of your money with a pie chart. Stay on top of your finances without the extra headache.",
      technologies:
        "Python, Flask, HTML, Tailwind CSS, Jinja, Chart.js, SQLite",
      status: "COMPLETED - NOV 2025",
      link: "https://github.com/hamim23z/FinTrack",
      buttonText: "LIVE ON GITHUB",
      image: "/finance.png",
    },
    {
      id: 3,
      title: "Ertan Eats",
      description:
        "A lot of people know him. Some people may not know him. @newyorkturk on Instagram, TikTok, and YouTube. He is an influencer who goes to different fine dining, regular dining, and Michelin star restaurants all across the city. This website is designed to keep track of where he eats, what he orders, ratings, etc. All in one centralized location for his fan base.",
      technologies:
        "Next.js, Node.js, React.js, Javascript, Typescript, Supabase, Material UI",
      status: "COMPLETED - OCT 2025",
      link: "https://ertaneats.vercel.app/",
      buttonText: "SITE LIVE NOW",
      image: "/nyturk.jpg",
    },
    {
      id: 4,
      title: "NBA Championship Predictor",
      description:
        "Using a Kaggle Dataset of all the past NBA Championships, I altered it to also get the Eastern and Western Conference champions and then used Machine Learning to get the next 25 NBA Champions. I used the Random Forest classifier as well as Jupyter Notebooks. This is a very basic implementation so there will be a part two with much more detail. ",
      technologies:
        "Python3, Panda, NumPy, Random Forest, Scikit, Jupyter Notebooks",
      status: "COMPLETED - SEP 2025",
      link: "https://github.com/hamim23z/NBA-Championship-Predictor",
      buttonText: "LIVE ON GITHUB",
      image: "/nbalogo.png",
    },
    {
      id: 5,
      title: "Smart Finder",
      description:
        "The purpose of this project is to serve as a map based, geolocation website for delis and bodegas. Within a certain radius, users will be able to see different stores and the sandwich prices there. They will be able to leave photos, reviews, and have access to deals too! Plenty of more features available as well.",
      technologies:
        "Next.js, Node.js, React, Javascript, Material UI, Docker, MySQL, Google APIs, OpenAI, Stack Auth",
      status: "DELAYED",
      link: "/",
      buttonText: "DELAYED",
      image: "/smart_finder_logo.png",
    },
    {
      id: 6,
      title: "Blizzard Bot",
      description:
        "Blizzard Bot is a Discord based bot that I worked on early 2023 very frequently. The purpose of this project was to allow users in Discord servers to convert shoe sizes, check websites for bot security, give information about which companies are the best for botting, and provide raffle links to certain sneakers. This garnished hundreds of users daily. ",
      technologies: "Python, Discord.py",
      status: "COMPLETED - JAN 2023",
      link: "https://github.com/hamim23z/BlizzardBot1",
      buttonText: "GITHUB REPO",
      image: "/blizzardbot_logo.png",
    },
  ];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <CarouselContainer>
      <CarouselContent
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card, index) => (
          <Box key={card.id} minWidth="100%" boxSizing="border-box" p={1}>
            <Card
              sx={(theme) => ({
                margin: "auto",
                borderRadius: theme.spacing(2),
                transition: "0.3s",
                position: "relative",
                width: "100%",
                overflow: "initial",
                background: "#151312",
                color: "#ffffff",
                border: "1px solid #ffffff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingBottom: theme.spacing(2),
                [theme.breakpoints.up("md")]: {
                  flexDirection: "row",
                  paddingTop: theme.spacing(2),
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
                  src={card.image}
                  alt={card.title}
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
                  <span style={{ fontWeight: "bold" }}>{card.status}</span> |{" "}
                  {card.technologies}
                </Typography>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "900",
                    marginBottom: "0.35em",
                    fontFamily: "Kanit",
                  }}
                >
                  {card.title}
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
                  {card.description}
                </Typography>

                <Link href={card.link} target="_blank" passHref>
                  <Button
                    sx={{
                      backgroundColor: "red",
                      borderRadius: 100,
                      paddingLeft: 3,
                      paddingRight: 3,
                      color: "#ffffff",
                      fontFamily: "Kanit",
                      marginLeft: "-5px",
                    }}
                  >
                    {card.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Box>
        ))}
      </CarouselContent>
      <NavigationButton
        onClick={prevCard}
        style={{ left: 8 }}
        aria-label="previous card"
      >
        <ArrowBackIosNewIcon />
      </NavigationButton>
      <NavigationButton
        onClick={nextCard}
        style={{ right: 8 }}
        aria-label="next card"
      >
        <ArrowForwardIosIcon />
      </NavigationButton>
    </CarouselContainer>
  );
}
