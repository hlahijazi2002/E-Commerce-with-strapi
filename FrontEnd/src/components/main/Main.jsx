import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useTheme,
} from "@mui/material";

import { motion } from "framer-motion";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import Product from "./Product";
import { useGetProductByNameQuery } from "../../redux/Product";

export default function Main() {
  const allProductsApi = "products?populate=*";
  const menProductsApi = "products?populate=*&filters[Category][$eq]=men";
  const womenProductsApi = "products?populate=*&filters[Category][$eq]=women";

  const [myData, setMyData] = useState(allProductsApi);
  const [selectedProduct, setSelectedProduct] = useState({});

  const { data, error, isLoading } = useGetProductByNameQuery(myData);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment != null) {
      setMyData(newAlignment);
    }
  };

  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (data) {
    return (
      <Container sx={{ mt: 9, py: 11 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
          gap={3}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography variant="body1" fontWeight={300}>
              All our new arrivals in a exclusive brand selection{" "}
            </Typography>
          </Box>
          <ToggleButtonGroup
            value={myData}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              gap: 1.8,
              ".Mui-selected": {
                border: "1px solid rgba(333, 69, 96, 0.5) !important",
                color: "#e94560 !important",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="category-btn"
              value={allProductsApi}
              aria-label="left aligned"
              color="error"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="category-btn"
              value={menProductsApi}
              aria-label="centered"
            >
              Men Category
            </ToggleButton>
            <ToggleButton
              sx={{ color: theme.palette.text.primary }}
              className="category-btn"
              value={womenProductsApi}
              aria-label="right aligned"
            >
              Women Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          {data.data.map((item) => {
            return (
              <Card
                component={motion.div}
                layout
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                key={item.id}
                sx={{
                  maxWidth: 333,
                  mt: 6,
                  ":hover .MuiCardMedia-root": {
                    scale: "1.06",
                    rotate: "1deg",
                    transition: ".3s",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 277 }}
                  // @ts-ignore
                  image={`${item.Image[0].url}`}
                  // image="http://localhost:1337/uploads/images_be6754f31e.jpg"
                  title="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography variant="h6" gutterBottom component={"div"}>
                      {item.Title}
                    </Typography>
                    <Typography variant="subtitle1" component={"p"}>
                      {item.Price}$
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    {item.Decsription}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "space-between", alignItems: "center" }}
                >
                  <Button
                    onClick={() => {
                      handleClickOpen();
                      setSelectedProduct(item);
                    }}
                    size="large"
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: 600,
                      gap: "5px",
                    }}
                  >
                    <AddShoppingCartOutlinedIcon fontSize="small" />
                    Add To Card
                  </Button>
                  <Rating
                    name="read-only"
                    value={item.Rating}
                    readOnly
                    precision={0.5}
                  />
                </CardActions>
              </Card>
            );
          })}
        </Stack>

        <Dialog
          sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 0,
              right: 5,
              "&:hover": {
                color: "red",
                rotate: "360deg",
                transition: ".3s",
                bgcolor: "initial",
              },
            }}
          >
            <Close />
          </IconButton>
          <Product selectedProduct={selectedProduct} />
        </Dialog>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", py: 10 }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    // @ts-ignore
    return (
      <Container sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h6">
          {
            // @ts-ignore
            error.error
          }
        </Typography>
        <Typography variant="h6">Please tey again later</Typography>
      </Container>
    );
  }
}
