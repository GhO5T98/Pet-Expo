import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  IconButton,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PetsIcon from "@mui/icons-material/Pets";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Termsofuse from "./TermsOfUse";
import Disclaimer from "./Disclaimer";
import Privacysettings from "./PrivacySettings";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  const centeredTextStyle = {
    textAlign: "center",
  };

  return (
    <Box
      sx={{
        backgroundColor: "#a9def9",
        mt: 3,
        py: 3,
        px: 2,
      }}
    >
      <Container
        className="custom-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mb: 2,
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            pt: 4,
            ...(isMobileOrTablet && centeredTextStyle),
          }}
        >
          <PetsIcon sx={{ fontSize: "2rem", transform: "rotate(-25deg)" }} />
          <Typography sx={{ fontSize: "1.6rem", fontWeight: 700 }}>
            Pet Expo
          </Typography>
        </Grid>
      </Container>
      <Divider
        variant="middle"
        sx={{
          my: 2,
          borderColor: "#fff",
          borderWidth: 1,
        }}
      />
      <Container>
        {isMobileOrTablet ? (
          <>
            <Accordion
              sx={{
                backgroundColor: "#c2e6f9",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  Follow Us
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={centeredTextStyle}>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ justifyContent: "center" }}
                >
                  <IconButton aria-label="facebook" sx={{ color: "black" }}>
                    <FacebookIcon fontSize="medium" />
                  </IconButton>
                  <IconButton aria-label="twitter" sx={{ color: "black" }}>
                    <TwitterIcon fontSize="medium" />
                  </IconButton>
                  <IconButton aria-label="instagram" sx={{ color: "black" }}>
                    <InstagramIcon fontSize="medium" />
                  </IconButton>
                </Stack>
                <Typography sx={{ fontSize: "1.1rem", fontWeight: 600, mt: 2 }}>
                  Get In Touch
                </Typography>
                <Typography sx={{ fontSize: "1rem" }}>
                  <LocalPhoneOutlinedIcon sx={{ fontSize: ".8rem" }} />{" "}
                  +3559988765
                </Typography>
                <Typography sx={{ fontSize: "1rem" }}>
                  <EmailOutlinedIcon sx={{ fontSize: ".8rem" }} />{" "}
                  info@petexpo.com
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "#c2e6f9",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  Our Pets
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={centeredTextStyle}>
                <Stack direction="column" spacing={1}>
                  <Typography sx={{ fontSize: "1rem" }}>Dogs</Typography>
                  <Typography sx={{ fontSize: "1rem" }}>Cats</Typography>
                  <Typography sx={{ fontSize: "1rem" }}>Birds</Typography>
                </Stack>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "#c2e6f9",
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  Quick Links
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={centeredTextStyle}>
                <Stack direction="column" spacing={1}>
                  <Typography>
                    <Termsofuse />
                  </Typography>
                  <Typography>
                    <Disclaimer />
                  </Typography>
                  <Typography>
                    <Privacysettings />
                  </Typography>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </>
        ) : (
          <Grid
            className="custom-grid"
            container
            spacing={4}
            sx={{ textAlign: "center" }}
          >
            <Grid item xs={4} sx={{ textAlign: "left" }}>
              <Typography sx={{ fontSize: "1.3rem", fontWeight: 600 }}>
                Follow Us
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                sx={{ justifyContent: "left" }}
              >
                <IconButton aria-label="facebook" sx={{ color: "black" }}>
                  <FacebookIcon fontSize="medium" />
                </IconButton>
                <IconButton aria-label="twitter" sx={{ color: "black" }}>
                  <TwitterIcon fontSize="medium" />
                </IconButton>
                <IconButton aria-label="instagram" sx={{ color: "black" }}>
                  <InstagramIcon fontSize="medium" />
                </IconButton>
              </Stack>
              <Typography sx={{ fontSize: "1.3rem", fontWeight: 600 }}>
                Get In Touch
              </Typography>
              <Typography sx={{ fontSize: "1rem" }}>
                <LocalPhoneOutlinedIcon sx={{ fontSize: "1rem" }} /> +3559988765
              </Typography>
              <Typography sx={{ fontSize: "1rem" }}>
                <EmailOutlinedIcon sx={{ fontSize: "1rem" }} /> info@petexpo.com
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography sx={{ fontSize: "1.3rem", fontWeight: 600 }}>
                Our Pets
              </Typography>
              <Stack direction="column" spacing={1}>
                <Typography sx={{ fontSize: "1rem" }}>Dogs</Typography>
                <Typography sx={{ fontSize: "1rem" }}>Cats</Typography>
                <Typography sx={{ fontSize: "1rem" }}>Birds</Typography>
              </Stack>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: "right" }}>
              <Typography sx={{ fontSize: "1.3rem", fontWeight: 600 }}>
                Quick Links
              </Typography>
              <Stack direction="column" spacing={1}>
                <Typography>
                  <Termsofuse />
                </Typography>
                <Typography>
                  <Disclaimer />
                </Typography>
                <Typography>
                  <Privacysettings />
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        )}
        <Typography textAlign="center" mt={2}>
          Copyright © 2024 Pet Expo. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
