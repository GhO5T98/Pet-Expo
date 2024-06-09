import React, { useState, useEffect } from "react";
import { Container, Paper, Skeleton } from "@mui/material";
import Masonry from "@mui/lab/Masonry";
import { styled } from "@mui/material/styles";
import axios from "axios";
import LazyLoad from "react-lazyload";

const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function Gallery() {
  const UNSPLASH_ACCESS_KEY = "aBdYttB2DLpPjfFM-ECK6ahE_tKHC3vdfJx9VzEJbDE";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //Unsplash Api Image Fetch.
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categories = [
          "snowy-owl",
          "sphynx-cat",
          "dalmatian-dog",
          "bald-eagle",
          "husky",
          "ragdoll-cat",
          "resplendent-quetzal",
          "russian-blue-cat",
          "black-swan",
        ];
        const requests = categories.map((category) =>
          axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
              query: category,
              per_page: 2,
            },
            headers: {
              Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
            },
          })
        );

        const responses = await Promise.all(requests);
        const images = responses.flatMap((response) => response.data.results);
        const shuffledImages = shuffleArray(images);
        setData(shuffledImages);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container
      sx={{
        my: "7em",
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-end",
      }}
    >
      {loading ? (
        <Masonry columns={{ xs: 3, sm: 4, md: 5 }} spacing={3}>
          {Array.from(new Array(8)).map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              animation="wave"
              width={300}
              height={200}
              sx={{ borderRadius: 4 }}
            />
          ))}
        </Masonry>
      ) : (
        <Masonry columns={{ xs: 3, sm: 4, md: 5 }} spacing={2}>
          {data.map((item, index) => (
            <LazyLoad key={index} height={200} offset={100} once>
              <div>
                <img
                  srcSet={`${item.urls.thumb}?w=162&auto=format&dpr=2 2x`}
                  src={`${item.urls.thumb}?w=162&auto=format`}
                  alt={item.alt_description}
                  loading="lazy"
                  style={{
                    borderRadius: 5,
                    display: "block",
                    width: "100%",
                  }}
                />
              </div>
            </LazyLoad>
          ))}
        </Masonry>
      )}
    </Container>
  );
}
