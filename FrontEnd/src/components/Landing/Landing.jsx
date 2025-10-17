import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
import Icons from "./Icons";

const sliders = [
  { text: "women", link: "src/images/women.jpg" },
  { text: "men", link: "src/images/men.jpg" },
];
export default function Landing() {
  const theme = useTheme();
  return (
    <Container>
      <Box sx={{ display: "flex", alignItems: "center", mt: 3, gap: 2, pt: 3 }}>
        <Swiper
          loop={true}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sliders.map((slider) => {
            return (
              <SwiperSlide className="slider" key={slider.link}>
                <img src={slider.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("sm")]: {
                      textAlign: "center",
                      pt: 5,
                      pb: 7,
                      bgcolor: "white",
                      width: "100%",
                      height: "100%",
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ color: "#222", textTransform: "uppercase", mb: 1 }}
                  >
                    Lifestyle collection
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#222",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      mb: 1,
                    }}
                  >
                    {slider.text}
                  </Typography>
                  <Stack
                    direction={"row"}
                    sx={{ justifyContent: { xs: "center", sm: "left" }, mb: 1 }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ color: "#222", textTransform: "uppercase" }}
                    >
                      Sale up to
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#D23F57",
                        textTransform: "uppercase",
                        pl: 1,
                      }}
                    >
                      30% Off
                    </Typography>
                  </Stack>
                  <Typography variant="h6" sx={{ color: "#555", mb: 2 }}>
                    Get Free Shipping on orders over 99.00$
                  </Typography>
                  <Button
                    sx={{
                      bgcolor: "#222",
                      color: "white",
                      textTransform: "uppercase",
                      px: 5,
                      py: 1,
                      borderRadius: 0,
                    }}
                  >
                    Shop Now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.5%" }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src\images\shoes.jpg" alt="" />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "20px",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  textTransform: "uppercase",
                  mb: "5px",
                  fontSize: "17px",
                }}
              >
                New Arrivals
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#283445", textTransform: "uppercase" }}
              >
                Summer
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#283445", textTransform: "uppercase" }}
              >
                Sale 20% off
              </Typography>
              <Link
                sx={{
                  mt: "5px",
                  color: "#283445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: ".2s",
                  ":hover": { color: "#023F57" },
                }}
                underline="none"
                href="#"
              >
                <Typography
                  sx={{
                    color: "#283445",
                    fontSize: "12px",
                  }}
                >
                  Shop Now
                </Typography>
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Box>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src\images\computer.jpg" alt="" />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: "20px",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#283445",
                  textTransform: "uppercase",
                  mb: 1,
                  fontSize: "17px",
                }}
              >
                Gaming 4k
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#283445", textTransform: "uppercase" }}
              >
                Desktops &
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#283445", textTransform: "uppercase" }}
              >
                Laptops
              </Typography>
              <Link
                sx={{
                  mt: "5px",
                  color: "#283445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: ".2s",
                  ":hover": { color: "#023F57" },
                }}
                underline="none"
                href="#"
              >
                <Typography
                  sx={{
                    color: "#283445",
                    fontSize: "12px",
                  }}
                >
                  Shop Now
                </Typography>
                <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Icons />
    </Container>
  );
}
