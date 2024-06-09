import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

const Privacysettings = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");

  const handleClickOpen = (scrollType) => () => {
    setScroll(scrollType || "paper"); // Ensure scrollType defaults to "paper"
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {" "}
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
        Privacy Settings
      </Typography>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Privacy Settings</DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText id="scroll-dialog-description">
            <div>
              {" "}
              <strong>Introduction</strong> - Welcome to our Pet Expo website.
              Your privacy is important to us. This privacy settings page
              explains how we collect, use, share, and protect your personal
              information. By using our website, you agree to the terms outlined
              in this policy.
            </div>
            <div>
              {" "}
              <br /> <strong>Information We Collect</strong> - We collect the
              following types of information: Personal Information: Name, email
              address, phone number, and mailing address. Demographic
              Information: Age, gender, and preferences related to pet
              ownership. Usage Data: Pages visited, time spent on the site, and
              other browsing behavior. Technical Data: IP address, browser type,
              operating system, and device information.
            </div>
            <div>
              <br /> <strong>How We Use Your Information</strong> - We use your
              information to: Provide and improve our services. Communicate with
              you about events, promotions, and updates. Personalize your
              experience on our website. Process registrations and purchases.
              Analyze usage patterns to enhance our website.
            </div>
            <br />
            <div>
              <strong>Sharing Your Information</strong> - We do not sell your
              personal information. We may share your information with: Service
              Providers: Third-party companies that assist us in operating our
              website and providing services. Event Partners: Organizations
              involved in the Pet Expo for the purpose of coordinating event
              activities. Legal Obligations: Authorities when required by law to
              comply with legal processes or protect our rights.
            </div>{" "}
            <div>
              <br />
              <strong>Cookies and Tracking Technologies</strong> - Our website
              uses cookies and similar technologies to: Remember your
              preferences and settings. Understand how you use our website.
              Provide relevant advertisements. You can manage your cookie
              preferences through your browser settings. However, disabling
              cookies may affect your experience on our website.
            </div>
            <div>
              <br />
              <strong>Your Rights</strong> - You have the right to: Access the
              personal information we hold about you. Request corrections to
              inaccurate or incomplete data. Request deletion of your personal
              information. Opt-out of receiving marketing communications. To
              exercise these rights, please contact us at [info@petexpo.com].
            </div>
            <div>
              {" "}
              <br /> <strong>Data Security</strong> - We implement appropriate
              technical and organizational measures to protect your personal
              information from unauthorized access, disclosure, alteration, or
              destruction.
            </div>
            <div>
              {" "}
              <br /> <strong>Changes to This Policy</strong> - We may update
              this privacy policy from time to time. We will notify you of any
              changes by posting the new policy on our website and updating the
              effective date.
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

export default Privacysettings;
