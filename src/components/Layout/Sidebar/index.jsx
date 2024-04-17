"use client";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import AccountPanel from "./AccountPanel";
import Menu from "./Menu";
import SearchPanel from "./SearchPanel";

export const SIDEBARS = [{}];

const Sidebar = () => {
  return (
    <Box
      component={Paper}
      sx={{
        px: 2,
        width: 240,
        height: "100vh",
        position: "sticky",
        top: 0,
        borderRadius: 0,
        overflowY: "scroll",
      }}
    >
      <Stack
        justifyContent="space-between"
        direction={{ xs: "row", md: "column" }}
        sx={{ height: "inherit" }}
      >
        <Box sx={{ py: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: 14, color: "grey.700", m: "auto 0" }}>
              Brand.
            </Typography>
            <IconButton size="small" disabled>
              <ChevronLeftOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
          <SearchPanel />
          <Menu />
        </Box>
        <AccountPanel />
      </Stack>
    </Box>
  );
};

export default Sidebar;
