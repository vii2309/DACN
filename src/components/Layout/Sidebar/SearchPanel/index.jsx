import { Box, InputAdornment, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const SearchPanel = () => {
  // const [focused, ToggleFocused] = React.useState(false);

  // useEffect(() => {
  //   ToggleFocused(false);
  // }, [location.pathname]);

  return (
    <Box sx={{ my: 2 }}>
      <TextField
        sx={{ width: "100%", "& .MuiInputBase-adornedStart": { pl: 1 } }}
        placeholder="Search..."
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 20 }} />
            </InputAdornment>
          ),
          onClick: () => ToggleFocused(true),
        }}
      />
    </Box>
  );
};

export default SearchPanel;
