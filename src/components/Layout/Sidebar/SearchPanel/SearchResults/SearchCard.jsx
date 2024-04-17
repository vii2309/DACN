import { CellStatus } from "@components/DataGrid/Cell";
import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({
  title,
  description,
  item,
  id,
  collections = [],
  status,
}) => {
  const chip = collections?.find((x) => x?.value === status) || null;
  return (
    <Link to={`/${item}/${id}`}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: "space-between",
          gap: 1,
          backgroundColor: "#f5f5f5",
          p: 1,
          mb: 1,
        }}
      >
        <Box>
          <Link to={`/${item}/${id}`}>
            <Typography fontSize={13} fontWeight={600} color="#0d47a1">
              {title || "---"}
            </Typography>
          </Link>
          <Typography fontSize={12} fontWeight={600} color="#9e9e9e">
            {description || "---"}
          </Typography>
        </Box>
        {!!chip && <CellStatus component="muiChip" data={chip} />}
      </Box>
    </Link>
  );
};

export default SearchCard;
