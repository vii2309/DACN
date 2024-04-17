import React from 'react';
import { Skeleton, Typography } from '@mui/material';

const Username = ({ username }) => {
  return username ? (
    <Typography
      sx={{ fontSize: 13, fontWeight: 500, textTransform: 'capitalize' }}
    >
      {username.split('@')[0].split('.').join(' ')}
    </Typography>
  ) : (
    <Skeleton
      animation='wave'
      height={15}
      width='75%'
      variant='rectangular'
      sx={{ mb: 0.5 }}
    />
  );
};

export default Username;
