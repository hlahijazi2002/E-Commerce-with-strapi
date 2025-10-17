import React from "react";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const options = ["EN", "AR"];
export default function Header1() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box
      sx={{
        bgcolor: "#283445",
        py: "2px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}
    >
      <Container fixed maxWidth="xl">
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              borderRadius: "12px",
              bgcolor: "#D23F57",
              color: "white",
              mr: 1.6,
              p: "5px 10px 3px ",
              fontSize: "12px",
              textTransform: "uppercase",
              fontWeight: "bold",
              width: "fit-content",
              height: "fit-content",
            }}
          >
            hot
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "300",
              color: "white",
            }}
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1}></Box>
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ color: "white", fontSize: "16px" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ color: "white", fontSize: "16px" }} />
              </IconButton>
            )}
          </div>

          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: 0.8 }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "12px", color: "white" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMoreIcon sx={{ fontSize: "16px", color: "white" }} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "lock-button",
                role: "listbox",
              },
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                sx={{ fontSize: "11px", minHeight: "10px", p: "5px 10px" }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <TwitterIcon sx={{ fontSize: "16px", color: "white" }} />
          <FacebookIcon sx={{ mx: 1, fontSize: "16px", color: "white" }} />
          <InstagramIcon sx={{ fontSize: "16px", color: "white" }} />
        </Stack>
      </Container>
    </Box>
  );
}
