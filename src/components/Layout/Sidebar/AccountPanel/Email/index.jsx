import React from 'react';
import { Skeleton, Typography } from '@mui/material';

const Email = ({ email }) => {
  return email ? (
    <Typography sx={{ fontSize: 13, color: 'grey.500', lineHeight: 'normal' }}>
      {email}
    </Typography>
  ) : (
    <Skeleton animation='wave' height={16} width='100%' variant='rectangular' />
  );
};

export default Email;
