import React from "react";
import { Dialog } from "@mui/material";
import { styled } from "@mui/material/styles";

import SearchInput from "../SearchInput";
import SearchResults from "../SearchResults";

const BluredDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiBackdrop-root": {
    backdropFilter: "blur(5px)",
  },
}));

const SearchDialog = ({ close }) => {
  const [state, setState] = React.useState({
    results: {},
  });

  return (
    <BluredDialog
      fullWidth={true}
      transitionDuration={0}
      onClose={close}
      open={true}
      autoFocus
    >
      <SearchInput callback={setState} />
      {Object.keys(state?.results)?.length > 0 && (
        <SearchResults response={state} />
      )}
    </BluredDialog>
  );
};

export default SearchDialog;
