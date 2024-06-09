import React from "react";
import SponsorImg1 from "../../../assets/sponsor1.png";
import SponsorImg2 from "../../../assets/sponsor2.png";
import SponsorImg3 from "../../../assets/sponsor3.png";
import SponsorImg4 from "../../../assets/sponsor4.png";
import SponsorImg5 from "../../../assets/sponsor5.png";
import SponsorImg6 from "../../../assets/sponsor6.png";
import SponsorImg7 from "../../../assets/sponsor7.png";
import "./sponsor.scss";
import { Box, Typography, Container } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";

const Sponsor = () => {
  const sponsorsImg = [
    SponsorImg1,
    SponsorImg2,
    SponsorImg3,
    SponsorImg4,
    SponsorImg5,
    SponsorImg6,
    SponsorImg7,
  ];
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
            Our Sponsors
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
              xs: "150px",
              sm: "156px",
              md: "166px",
            },
            height: "6px",
            backgroundColor: "#a9def9",
          }}
        />
      </Box>
      <Box>
        <div className="logos">
          <div className="logos-slide">
            {[...sponsorsImg, ...sponsorsImg].map((item, idx) => (
              <div className="logo" key={idx}>
                <img src={item} alt={`Sponsor ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </Box>
    </>
  );
};

export default Sponsor;
