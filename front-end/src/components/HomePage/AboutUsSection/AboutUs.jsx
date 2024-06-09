import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import PetExpo from "../../../assets/petExpo.png";
import "./aboutUs.scss";

const AboutUs = () => {
  return (
    <>
      <Box
        sx={{
          gap: 1,
          p: 2,
          mt: 4,
          mb: 2,
          position: "relative",
          textAlign: "center",
        }}
      >
        <Container
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          <PetsIcon
            sx={{
              fontSize: { xs: "1.6rem", sm: "1.8rem", md: "2rem" },
              transform: "rotate(-25deg)",
            }}
          />{" "}
          <Typography
            sx={{ fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" } }}
          >
            About Us
          </Typography>
        </Container>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: {
              xs: "51%",
              sm: "50.5%",
              md: "50.5%",
            },
            transform: "translateX(-50%)",
            width: {
              xs: "110px",
              sm: "125px",
              md: "120px",
            },
            height: "6px",
            backgroundColor: "#a9def9",
          }}
        />
      </Box>
      <Box sx={{ p: 4 }}>
        <Grid container spacing={2}>
          <Grid
            xs={12}
            sm={7}
            sx={{
              p: {
                xs: 5,
                sm: 8,
                md: 10,
              },
              textAlign: {
                xs: "center",
                sm: "left",
                md: "left",
              },
            }}
          >
            <Typography
              className="underlined"
              sx={{
                fontSize: { xs: "1.3rem", sm: "1.5rem", md: "1.9rem" },
                fontWeight: "600",
                mb: 2,
              }}
            >
              Who are we?
            </Typography>

            <Typography
              sx={{ fontSize: { xs: ".9rem", sm: "1rem", md: "1.3rem" } }}
            >
              Welcome to the Pet Expo, your ultimate online destination for
              exploring the diverse and wonderful world of pets. Our platform is
              dedicated to showcasing a wide variety of pets, celebrating their
              unique traits, and fostering a deeper understanding and
              appreciation of these incredible animals.
            </Typography>
          </Grid>
          <Grid
            xs={12}
            sm={5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="image-container">
              <div className="shape background-shape"></div>
              <div className="shape overlay-shape"></div>
              <img src={PetExpo} alt="Abstract" className="image" />
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          p: {
            xs: 5.5,
            sm: 5,
            md: 4,
          },
          backgroundColor: "#a9def9",
          mt: {
            xs: 4,
          },
          textAlign: {
            xs: "center",
            sm: "left",
            md: "left",
          },
        }}
      >
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} sx={{ p: 2 }}>
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
                fontWeight: "600",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Our Mission
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: ".9rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              Our mission is to create a vibrant, informative, and engaging
              online space where pet enthusiasts can discover and learn about
              different types of pets. We aim to highlight the beauty,
              personality, and charm of each pet, encouraging responsible pet
              ownership and a stronger bond between humans and their animal
              companions.
            </Typography>
          </Grid>
          <Grid xs={12} sm={6} sx={{ p: 2 }}>
            <Typography
              sx={{
                fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.3rem" },
                fontWeight: "600",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Why Choose Us
            </Typography>
            <Typography
              sx={{
                mt: 2,
                fontSize: { xs: ".9rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              At the Pet Expo, we believe every pet has a story to tell and
              deserves to be celebrated. Whether you are a seasoned pet owner or
              considering bringing a new pet into your life, our website is
              designed to be a valuable resource and a source of inspiration.
              Join us in our mission to promote the joy and responsibility of
              pet ownership, and discover the wonderful world of pets with us!
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutUs;
