import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function Product({ selectedProduct }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment != null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={2.5}
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
    >
      <Box sx={{ display: "flex" }}>
        <img
          width={380}
          src={selectedProduct.Image[selectedIndex].url}
          alt=""
        />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" }, py: 4, px: 2 }}>
        <Typography variant="h5">{selectedProduct.Title}</Typography>
        <Typography
          my={0.4}
          fontSize={"22px"}
          variant="h4"
          color={"crimson"}
          // fontWeight={"bold"}
        >
          {selectedProduct.Price}$
        </Typography>
        <Typography variant="body1">{selectedProduct.Decsription}</Typography>

        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          <ToggleButtonGroup
            value={selectedIndex}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              ".Mui-selected": {
                opacity: 1,
              },
            }}
          >
            {selectedProduct.Image.map((image, index) => {
              return (
                <ToggleButton
                  key={image.id}
                  value={index}
                  sx={{
                    p: 0,
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    opacity: ".5",
                  }}
                >
                  <img
                    width={"100%"}
                    height={"100%"}
                    key={image.id}
                    src={image.url}
                    style={{ borderRadius: 3 }}
                    onClick={() => {
                      setSelectedIndex(index);
                    }}
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
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
