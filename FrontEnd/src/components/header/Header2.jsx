import {
  alpha,
  Badge,
  Box,
  Container,
  IconButton,
  InputBase,
  ListItem,
  Stack,
  styled,
  Typography,
  useTheme,
} from "@mui/material";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "260px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
  border: "1px solid #777",
  flexGrow: 0.4,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const options = ["All Categories", "CAR", "Clothes", "Electronics"];

export default function Header2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
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

  const theme = useTheme();
  return (
    <Container
      sx={{
        my: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <ShoppingCartOutlinedIcon />
        <Typography variant="body1">E-Commerce</Typography>
      </Box>
      <Search
        sx={{
          borderRadius: "22px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              // @ts-ignore
              bgcolor: theme.palette.listColor.main,
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
              padding: "0",
            }}
          >
            <ListItem
              sx={{ "&:hover": { cursor: "pointer" } }}
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                secondary={options[selectedIndex]}
                sx={{
                  width: 90,
                  textAlign: "center",
                  // "&:hover": { cursor: "pointer" },
                }}
              />
              <ExpandMoreIcon />
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
                sx={{
                  fontSize: "13px",
                }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>

      <Stack direction={"row"}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>

        <IconButton>
          <Person2OutlinedIcon />
        </IconButton>
      </Stack>
    </Container>
  );
}
