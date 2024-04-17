import React from 'react';
import { Avatar as MuiAvatar, Skeleton } from '@mui/material';

const Avatar = ({ username, size }) => {
  return username ? (
    <MuiAvatar sx={{ width: size, height: size, fontSize: 12 }}>
      {username
        .split('@')[0]
        .split('.')
        .map((e) => e.charAt(0).toUpperCase())
        .join('')}
    </MuiAvatar>
  ) : (
    <Skeleton
        animation='wave'
        variant='circular'
      width={size}
      height={size}
      sx={{ minWidth: size }}
    />
  );
};

export default Avatar;
