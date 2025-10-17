import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

export default function Icons() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        bgcolor: theme.palette.mode === "light" ? "white" : "black",
        mt: 2.6,
      }}
    >
      <Stack
        direction={"row"}
        sx={{ alignItems: "center", flexWrap: "wrap" }}
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
      >
        <MyBox
          icon={<ElectricBoltIcon fontSize="large" />}
          title={"Fast Delivery"}
          subTitle={"Start from 10$"}
        />
        <MyBox
          icon={<WorkspacePremiumIcon fontSize="large" />}
          title={"Money Guarantee"}
          subTitle={"7 Day Back"}
        />
        <MyBox
          icon={<AccessAlarmIcon fontSize="large" />}
          title={"356 Days"}
          subTitle={"For free return"}
        />
        <MyBox
          icon={<CreditScoreIcon fontSize="large" />}
          title={"Payment"}
          subTitle={"Secure system"}
        />
      </Stack>
    </Container>
  );
}

export function MyBox({ icon, title, subTitle }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "250px",
        display: "flex",
        alignItems: "center",

        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
        flexGrow: 1,
        py: 1.6,
        gap: 3,
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 300,
            color: theme.palette.text.secondary,
          }}
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
}
