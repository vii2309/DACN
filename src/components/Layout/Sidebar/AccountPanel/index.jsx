import LogoutIcon from "@mui/icons-material/Logout";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import Avatar from "./Avatar";
import Email from "./Email";
import Username from "./Username";

const SidebarAccountPanel = ({
  username = "Vi Trần",
  email = "thuy.vi@masteries.vn",
}) => {
  const [popper] = useState(false);
  return (
    <React.Fragment>
      {popper && (
        <Dialog open={true} maxWidth="sm" fullWidth>
          <DialogTitle>Bạn có muốn đăng xuất?</DialogTitle>
          <DialogActions>
            <Button
              size="small"
              variant="text"
              onClick={() => setPopper(false)}
              sx={{ height: 36 }}
            >
              Huỷ thao tác
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={callLogout}
              sx={{ height: 36, minWidth: 150 }}
            >
              Đăng xuất
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {
        <Box
          sx={{
            py: 2,
            borderTop: "1px solid #E1E1E1",
            minHeight: 70,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Avatar size={32} username={username} />
            <Box sx={{ width: "100%", mx: 0.75 }}>
              <Username username={username} />
              <Email email={email} />
            </Box>
            <IconButton aria-label="logout" onClick={() => setPopper(true)}>
              <LogoutIcon sx={{ fontSize: 20 }} />
            </IconButton>
          </Stack>
        </Box>
      }
    </React.Fragment>
  );
};

export default SidebarAccountPanel;
