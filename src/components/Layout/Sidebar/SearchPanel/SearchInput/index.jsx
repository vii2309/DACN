import React from "react";

import _ from "lodash";

import {
  Box,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import SearchApi from "@/apis/beta/SearchApi";

const DisabledColorOutlineInput = styled(OutlinedInput)(({ theme }) => ({
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&.Mui-focused, :hover": {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
      borderWidth: "1px",
    },
  },
}));

const SearchInput = ({ callback }) => {
  const [state, setState] = React.useState({
    searching: false,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounce = React.useCallback(
    _.debounce(async (value) => {
      const data = await SearchApi.Legacy(value);

      setState((prevState) => ({ ...prevState, searching: false }));
      callback((prevState) => ({ ...prevState, ...data }));
    }, 500),
    []
  );

  const handleChange = (value) => {
    if (!value?.trim()) {
      return;
    }

    return [
      !state.searching ? ["typing...", setState({ searching: true })] : null,
      debounce(value),
    ];
  };

  return (
    <FormControl
      fullWidth
      sx={{ position: "sticky", top: 0, backgroundColor: "#fff", zIndex: 10 }}
    >
      <DisabledColorOutlineInput
        id="search"
        onChange={(event) => handleChange(event.target.value)}
        autoFocus
        placeholder="Nhập từ khoá tìm kiếm cho khách hàng, dịch vụ"
        startAdornment={
          <InputAdornment position="start">
            {state.searching ? (
              <CircularProgress size={24} sx={{ color: "rgba(0,0,0,0.54)" }} />
            ) : (
              <SearchIcon />
            )}
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <Box
              sx={{
                p: "0.35rem",
                borderRadius: 1,
                border: "1px solid #E1E1E1",
                backgroundColor: "#F8F8F8",
              }}
            >
              <Typography sx={{ fontSize: 13, lineHeight: 1 }}>ESC</Typography>
            </Box>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchInput;
