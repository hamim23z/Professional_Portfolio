"use client";
import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";
import Color from "color";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const smart_study_logo = "/smart_study_logo.png";
const smart_finder_logo = "/smart_finder_logo.png";
const robot_logo = "/robot.png";
const blue_bus_logo = "/blue_bus.png";

const defaultColor = "#747f84";
const StyledRoot = styled("div")(({ color = defaultColor }) => ({
  position: "relative",
  borderRadius: "1rem",
  minWidth: 30,
  paddingTop: 20,
  "&:before": {
    transition: "0.2s",
    position: "absolute",
    width: "100%",
    height: "100%",
    content: '""',
    display: "block",
    borderRadius: "1rem",
    zIndex: 0,
    bottom: 0,
    backgroundColor: Color(color).darken(0.3).desaturate(0.2).string(),
  },
  "&:hover": {
    "&:before": {
      bottom: -6,
    },
    "& .MuiAvatar-root": {
      transform: "scale(1.1)",
      boxShadow: "0 6px 20px 0 rgba(0,0,0,0.38)",
    },
  },
}));

const CardMediaCover = styled(CardMedia)(() => ({
  borderRadius: "1rem",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 0,
  backgroundColor: "rgba(0, 0, 0, 0.08)",
  backgroundPosition: "center",
}));

const StyledH2 = styled("h2")(() => ({
  fontFamily: "Kanit",
  fontWeight: 900,
  color: "#fff",
  margin: 0,
}));

const StyledDescription = styled("div")(() => ({
  fontFamily: "Kanit",
  fontWeight: 400,
  color: "rgba(255, 255, 255, 0.9)",
  fontSize: "0.9rem",
  marginTop: "0.5rem",
  lineHeight: 1.4,
}));

const StyledContent = styled("div")(({ color = defaultColor }) => ({
  position: "relative",
  zIndex: 1,
  padding: "1rem",
  borderRadius: "1rem",
  boxShadow: `0 6px 16px 0 ${Color(color).fade(0.5)}`,
  "&:before": {
    content: '""',
    display: "block",
    position: "absolute",
    left: 0,
    top: 1,
    zIndex: 0,
    width: "100%",
    height: "100%",
    clipPath:
      "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",
    borderRadius: "1rem",
    background: `linear-gradient(to top, ${color}, ${Color(color)
      .rotate(24)
      .lighten(0.12)})`,
  },
}));

const AvatarLogo = styled(Avatar)(() => ({
  transition: "0.3s",
  width: 100,
  height: 100,
  boxShadow: "0 4px 12px 0 rgba(0,0,0,0.24)",
  borderRadius: "1rem",
}));

const StyledDivTeam = styled("div")(() => ({
  fontFamily: "Kanit",
  fontWeight: 700,
  color: "rgba(255 255 255 / 80%)",
}));

const StyledDivDate = styled("div")(() => ({
  fontFamily: "Kanit",
  fontWeight: 700,
  color: "#fff",
  opacity: 0.72,
  fontSize: "0.75rem",
  padding: "0 0.5rem",
  borderRadius: 12,
}));

const CarouselContainer = styled("div")({
  position: "relative",
  width: "100%",
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

const CustomCard = ({
  color,
  cover,
  logo,
  title,
  brand,
  date,
  description,
}) => {
  return (
    <StyledRoot color={color}>
      <CardMediaCover>
        <Image
          src={cover}
          alt="cover"
          layout="fill"
          objectFit="cover"
          style={{ borderRadius: "1rem" }}
        />
      </CardMediaCover>
      <StyledContent color={color}>
        <Box position={"relative"} zIndex={1}>
          <Box display="flex" p={0} gap={2} sx={{ flexWrap: "nowrap" }}>
            <Box>
              <AvatarLogo>
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  height={100}
                  style={{ borderRadius: "1rem" }}
                />
              </AvatarLogo>
            </Box>
            <Box alignSelf="flex-end">
              <StyledH2>{title}</StyledH2>
            </Box>
          </Box>
          {description && (
            <Box mt={2}>
              <StyledDescription>{description}</StyledDescription>
            </Box>
          )}
          <Box display="flex" mt={4} alignItems={"center"}>
            <Box>
              <StyledDivTeam>{brand}</StyledDivTeam>
            </Box>
            <Box ml="auto">
              <StyledDivDate>{date}</StyledDivDate>
            </Box>
          </Box>
        </Box>
      </StyledContent>
    </StyledRoot>
  );
};

export function CardHighlight() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      color: "#111",
      brand: "Personal Project",
      date: "Currently Working On",
      cover: robot_logo,
      logo: robot_logo,
      title: <>AI Projects + LLM&apos;s</>,
      description:
        "Building AI applications and experimenting with large language models to solve real-world problems. Currently 4 different projects.",
    },
    {
      color: "#111",
      brand: "Personal Project",
      date: "Currently Working On",
      cover: smart_study_logo,
      logo: smart_study_logo,
      title: <>Smart Study</>,
      description:
        "A website for engineering students from all over the world to study and find resources all in one place. Videos, quizzes, flashcards, worksheets, etc are all available.",
    },
    {
      color: "#111",
      brand: "Personal Project",
      date: "Currently Working On",
      cover: smart_finder_logo,
      logo: smart_finder_logo,
      title: <>Smart Finder</>,
      description:
        "A smart search tool that will help New Yorkers find the best rated and low price sandwich from their local bodega. For the city that never sleeps, a quick bite is what we all need sometimes.",
    },
    {
      color: "#111",
      brand: "Personal Project",
      date: "Currently Working On",
      cover: blue_bus_logo,
      logo: blue_bus_logo,
      title: <>NYC Meter Mind</>,
      description:
        "An website that will help New Yorkers know where and when they can park in case they want to plan a trip in advance or just forget what the rules are that day.",
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
          <Box key={index} minWidth="100%" boxSizing="border-box" p={1}>
            <CustomCard {...card} />
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
