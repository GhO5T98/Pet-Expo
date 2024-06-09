import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

const Termsofuse = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setScroll(scrollType || "paper");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography
        style={{
          textDecoration: "none",
          color: "#111214",
          textTransform: "capitalize",
          fontSize: "1rem",
          cursor: "pointer",
          userSelect: "none",
        }}
        onClick={handleClickOpen("paper")}
      >
        Terms Of Use
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Terms Of Use</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText id="scroll-dialog-description">
            <div>
              Welcome to Pet Expo! These terms of use govern your access to and
              use of Pet Expo . By accessing or using the Website, you agree to
              comply with these Terms. If you do not agree with any part of
              these Terms, please do not access or use the Website.
            </div>
            <br />
            <div>
              <strong>Use of the Website</strong> - You must be at least 18
              years old to use the Website. By accessing or using the Website,
              you represent and warrant that you are at least 18 years old. You
              agree to use the Website for lawful purposes only and in
              accordance with these Terms. You agree not to use the Website in
              any way that could damage, disable, overburden, or impair the
              Website or interfere with any other party's use and enjoyment of
              the Website.
            </div>
            <br />
            <div>
              <strong>Intellectual Property Rights</strong> - The Website and
              its entire contents, features, and functionality (including but
              not limited to text, graphics, logos, button icons, images, audio
              clips, digital downloads, data compilations, and software) are
              owned by Pet Expo or its licensors and are protected by copyright,
              trademark, and other intellectual property laws. You may not
              modify, copy, distribute, transmit, display, perform, reproduce,
              publish, license, create derivative works from, transfer, or sell
              any information, software, products, or services obtained from the
              Website without the prior written consent of Pet Expo.
            </div>
            <br />
            <div>
              <strong>User Content</strong> - You may have the opportunity to
              submit, post, or display content on the Website, including but not
              limited to comments, reviews, and feedback ("User Content"). By
              submitting User Content, you grant Pet Expo a non-exclusive,
              royalty-free, perpetual, irrevocable, and fully sublicensable
              right to use, reproduce, modify, adapt, publish, translate, create
              derivative works from, distribute, and display such User Content
              throughout the world in any media. You represent and warrant that
              you own or have the necessary rights, licenses, consents, and
              permissions to submit User Content and grant the rights granted
              herein.
            </div>
            <br />
            <div>
              <strong>Privacy Policy</strong> - Your use of the Website is
              subject to our Privacy Policy, which governs the collection, use,
              and disclosure of your personal information. By accessing or using
              the Website, you consent to the terms of our Privacy Policy.
            </div>
            <br />
            <div>
              <strong>Disclaimer</strong> - Your use of the Website is also
              subject to our Disclaimer, which outlines the limitations of
              liability associated with the use of the Website. By accessing or
              using the Website, you acknowledge and agree to the terms of our
              Disclaimer.
            </div>
            <br />
            <div>
              <strong>Changes to Terms</strong> - We reserve the right to
              update, modify, or replace these Terms at any time without prior
              notice. Any changes to these Terms will be effective immediately
              upon posting on this page. Your continued use of the Website after
              the posting of any changes constitutes acceptance of those
              changes.
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{ color: "black" }} onClick={handleClose}>
            Agree
          </Button>
          <Button style={{ color: "black" }} onClick={handleClose}>
            Disagree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Termsofuse;
