import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
} from "@mui/material";
import React, { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_5bhr1vk", // EmailJS service ID
        "template_vkhc2ts", //EmailJS template ID
        event.target,
        "6PmdCCLjch6d_UDrg" // EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your Message Has Been Sent !");

          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Message Not Sent!");
        }
      );
  };

  return (
    <>
      <Box
        sx={{
          gap: 1,
          p: 2,
          mt: 4,
          mb: 10,
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
            Contact Us
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
              xs: "127px",
              sm: "139px",
              md: "139px",
            },
            height: "6px",
            backgroundColor: "#a9def9",
          }}
        />
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid
            className="grid__contact"
            xs={12}
            sm={12}
            md={6}
            sx={{
              backgroundColor: "#a9def9",
              p: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "2rem", sm: "2.4rem", md: "2.8rem" },
                fontWeight: "600",
                lineHeight: "2.5rem",
                textAlign: "center",
                mb: 1,
              }}
            >
              Still Have Questions? Write To Us.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.3rem", md: "1.3rem" },
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              We'd love to hear from you! Whether you have questions, feedback,
              or simply want to share your pet stories, we're here to listen.
              Please fill out the form below, and a member of our team will get
              back to you as soon as possible.
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={6} sx={{ pl: 5, pr: 5 }}>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: "600",
                mt: { xs: 4, sm: 4, md: 0 },
                mb: 2,
                textAlign: "center",
              }}
            >
              Get In Touch!
            </Typography>{" "}
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "100%" },
                maxWidth: "600px",
                margin: "auto",
                p: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                id="name"
                label="Name"
                name="user_name"
                variant="filled"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <TextField
                id="email"
                label="Email"
                type="email"
                variant="filled"
                name="user_email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                id="message"
                label="Message"
                multiline
                rows={4}
                required
                variant="filled"
                name="message"
                sx={{ pb: 3 }}
                value={formData.message}
                onChange={handleChange}
              />

              <Button
                type="submit"
                endIcon={<SendIcon />}
                sx={{
                  backgroundColor: "#a9def9",
                  color: "#fff",
                  fontWeight: "600",
                  "&:hover": {
                    backgroundColor: "#c2e6f9",
                  },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Grid>
        </Grid>
        <ToastContainer
          oastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Box>
    </>
  );
};

export default Contact;
