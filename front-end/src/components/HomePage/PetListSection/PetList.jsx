import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Paper,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import usePets from "../../hooks/usePet";
import { Link } from "react-router-dom";

const PetList = () => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const smallTbletView = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const largeTabletView = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const laptopView = useMediaQuery(theme.breakpoints.up("lg"));

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: "center",
  }));

  const { pets } = usePets();

  //Shufle pets cards on display.
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Determine the number of pets to display based on screen size.

  let numPetsToDisplay;
  if (mobileView) {
    numPetsToDisplay = 2;
  } else if (smallTbletView) {
    numPetsToDisplay = 3;
  } else if (largeTabletView) {
    numPetsToDisplay = 4;
  } else if (laptopView) {
    numPetsToDisplay = 5;
  }

  const randomPets = shuffleArray([...pets]).slice(0, numPetsToDisplay);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          my: 4,
          mx: {
            xs: 4,
            sm: 5,
            md: 6,
          },
        }}
      >
        <PetsIcon sx={{ fontSize: "3rem", transform: "rotate(-25deg)" }} />
        <Typography
          sx={{
            color: "#a9def9",
            mt: 2,
            fontSize: { xs: ".9rem", sm: "1rem", md: "1.1rem" },
          }}
        >
          Meet Our Adorable Companions, Bringing Happiness and Warmth to Every
          Heart.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
          p: {
            xs: 1,
            sm: 2,
            md: 4,
          },
          backgroundColor: "#f2f2f2",
        }}
      >
        <Stack
          direction="row"
          spacing={{
            xs: 4,
            sm: 3,
            md: 2,
          }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            mt: 4,
            mb: 1,
          }}
        >
          {randomPets.map((pet, idx) => (
            <Item key={idx}>
              <Card
                sx={{
                  width: {
                    xs: 190, // font-size for extra-small screens (e.g., mobile)
                    sm: 190, // font-size for small screens (e.g., tablets)
                    md: 210, // font-size for medium screens (e.g., small laptops)
                  },
                  height: 250,
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={pet.image}
                    alt={pet.name}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        color: "#a9def9",
                      }}
                    >
                      {pet.name}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "1rem",
                      }}
                    >
                      {pet.kind === "Bird"
                        ? `Habitat: ${pet.habitat}`
                        : `Origin: ${pet.origin}`}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Item>
          ))}
        </Stack>
        <Link to={"/PetCategories"} style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontSize: "1rem",
              textAlign: "center",
              alignItems: "center",
              color: "#a9def9",
              mt: 2,
            }}
          >
            Show More <KeyboardDoubleArrowRightIcon sx={{ fontSize: "1rem" }} />
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default PetList;
