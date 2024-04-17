import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Stack, Typography, Button } from '@mui/material';
import { indigo } from '@mui/material/colors';

const SidebarReleasePanel = () => {
  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ p: 2, bgcolor: 'grey.100', borderRadius: '0.25rem' }}>
        <Typography sx={{ fontSize: 13, fontWeight: 500, mb: 0.5 }}>
          🥳 New features available!
        </Typography>
        <Typography sx={{ fontSize: 13, color: 'grey.700', mb: 1 }}>
          Checkout the new dashboard view 🙌. Pages and exports now load faster.
        </Typography>
        <Stack direction='row' justifyItems='center'>
          <Button
            component={NavLink}
            to={'/releases'}
            sx={{
              mr: 1,
              px: 1,
              py: 0.5,
              bgcolor: indigo[50],
              textDecoration: 'none',
            }}
            replace
          >
            What's new?
          </Button>
          <Button
            size='small'
            sx={{
              mr: 1,
              px: 1,
              py: 0.5,
              color: 'grey.700',
            }}
          >
            Dismiss
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default SidebarReleasePanel;
