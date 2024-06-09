import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const DashCard = ({ title, count }) => (
  <Card
    sx={{
      bgcolor: "#272829",
      color: "#ffffff",
      textAlign: "center",
      userSelect: "none",
    }}
  >
    <CardContent>
      <Typography
        sx={{
          fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.6rem" },
          fontWeight: "600",
        }}
        component="div"
      >
        {title}: {count}
      </Typography>
    </CardContent>
  </Card>
);

export default DashCard;
