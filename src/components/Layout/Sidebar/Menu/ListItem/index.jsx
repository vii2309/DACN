import { ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';

const ListItem = styled(ListItemButton)(({ theme }) => ({
  paddingLeft: '0.75rem',
  paddingRight: '1rem',
  borderRadius: '0.25rem',
  '&.active': {
    backgroundColor: indigo[50],
    svg: {
      fill: indigo[600],
    },
    '.MuiTypography-root': {
      color: indigo[600],
    },
  },
}));

export default ListItem;
