import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { KeyboardArrowRightOutlined } from "@mui/icons-material";

export default function Links({ title }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        ":hover .myList": { display: "block" },
        ":hover": { cursor: "pointer" },
      }}
    >
      <Typography sx={{ mr: 1 }}>{title}</Typography>
      <ExpandMoreIcon fontSize="small" />
      <Box
        className="myList"
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          minWidth: "170px",
          display: "none",
          zIndex: "1111",
        }}
      >
        <Paper sx={{ mt: 1 }}>
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "14px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Dashboard"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{
                  position: "relative",
                  ":hover .subList": { display: "block" },
                }}
              >
                <ListItemButton>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "14px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Products"
                  />
                  <Box flexGrow={1} />
                  <KeyboardArrowRightOutlined fontSize="small" />
                </ListItemButton>
                <Box
                  className="subList"
                  sx={{
                    position: "absolute",
                    left: "100%",
                    minWidth: "170px",
                    display: "none",
                  }}
                >
                  <Paper sx={{ ml: 1 }}>
                    <nav aria-label="secondary mailbox folders">
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": {
                                  fontSize: "14px",
                                  fontWeight: 300,
                                },
                              }}
                              primary="Add Product"
                            />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemText
                              sx={{
                                ".MuiTypography-root": {
                                  fontSize: "14px",
                                  fontWeight: 300,
                                },
                              }}
                              primary="Edit Product"
                            />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </nav>
                  </Paper>
                </Box>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "14px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Orders"
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText
                    sx={{
                      ".MuiTypography-root": {
                        fontSize: "14px",
                        fontWeight: 300,
                      },
                    }}
                    primary="Profile"
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
}
