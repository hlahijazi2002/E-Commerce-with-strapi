import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

export default function Product() {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={2.5}
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={300} src="src\images\computer.jpg" alt="" />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" }, py: 4, px: 2 }}>
        <Typography variant="h5">WOMEN'S FASHION</Typography>
        <Typography my={0.4} fontSize={"22px"} variant="body1">
          12.99$
        </Typography>
        <Typography variant="body1">
          Lizards are a widespread group of squamate reptiles, with over 6.000
          species, ranging across all continents except Antarctica.
        </Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {["src/images/shoes.jpg", "src/images/shoes.jpg"].map((image) => {
            return (
              <img
                width={90}
                height={100}
                key={image}
                src={image}
                style={{ borderRadius: 3 }}
              />
            );
          })}
        </Stack>
        <Button
          sx={{ textTransform: "capitalize", mb: { xs: 1, sm: 0 } }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}
