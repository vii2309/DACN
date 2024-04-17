import { ListItemText as MuiListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const ListItemText = styled(MuiListItemText)(({ theme }) => ({
  '.MuiTypography-root': {
    fontSize: 13,
    lineHeight: 'normal',
    display: 'inline-block',
    color: grey[700],
  },
}));

export default ListItemText;
