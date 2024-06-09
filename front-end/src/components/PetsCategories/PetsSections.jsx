import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Stack,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Pagination,
  Container,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";

const PetSection = ({ apiUrl, title, searchTerm, ModalComponent }) => {
  const [open, setOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const theme = useTheme();

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));
  const smallTbletView = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const largeTabletView = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const laptopView = useMediaQuery(theme.breakpoints.up("lg"));

  // Adjust items per page based on screen size
  let itemsPerPage;
  if (mobileView) {
    itemsPerPage = 2;
  } else if (smallTbletView) {
    itemsPerPage = 3;
  } else if (largeTabletView) {
    itemsPerPage = 4;
  } else if (laptopView) {
    itemsPerPage = 5;
  }

  const handleOpen = (pet) => {
    setSelectedPet(pet);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  useEffect(() => {
    if (searchTerm) {
      setCurrentPage(1);
    }
  }, [searchTerm]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Filter the data based on the search term
  const filteredData = data.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = filteredData.slice(startIndex, endIndex);
  const pageCount = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <>
      <Box
        sx={{
          gap: 1,
          p: 2,
          mt: 4,
          mb: 4,
          position: "relative",
          textAlign: "center",
        }}
      >
        <Container
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" } }}
          >
            {title}s
          </Typography>
        </Container>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "49.9%",
            transform: "translateX(-50%)",
            width: { xs: "50px", sm: "60px", md: "70px" },
            height: "6px",
            backgroundColor: "#a9def9",
          }}
        />
      </Box>
      {filteredData.length === 0 ? (
        <Typography textAlign="center" variant="body1">
          No match found in this section.
        </Typography>
      ) : (
        <>
          <Stack
            direction="row"
            spacing={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "nowrap",
            }}
          >
            {displayedItems.map((item, idx) => (
              <Card
                key={idx}
                onClick={() => handleOpen(item)}
                sx={{ width: 200, height: 250, margin: "0.5rem" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "1.2rem",
                        color: "#a9def9",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: "1rem",
                      }}
                    >
                      {item.kind === "Bird"
                        ? `Habitat: ${item.habitat}`
                        : `Origin: ${item.origin}`}{" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
          <Box mt={2} display="flex" justifyContent="center">
            <Pagination
              count={pageCount}
              page={currentPage}
              onChange={handlePageChange}
              shape="rounded"
            />
          </Box>
        </>
      )}

      {selectedPet && (
        <ModalComponent
          open={open}
          handleClose={handleClose}
          selectedPet={selectedPet}
        />
      )}
    </>
  );
};

export default PetSection;
