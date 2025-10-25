import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        variant="h6"
        color={"highlightText"}
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        Designed and developed by
        <Button
          sx={{
            color: "#ff7790",
            mx: "4px",
            textTransform: "capitalize",
            fontSize: "19px",
          }}
        >
          Hla Hijazi
        </Button>
        &copy;2025
      </Typography>
    </Box>
  );
}
