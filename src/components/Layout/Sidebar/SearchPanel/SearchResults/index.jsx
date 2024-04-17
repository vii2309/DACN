import { Box, Typography } from "@mui/material";
import React from "react";
import SearchCard from "./SearchCard";
import { CUSTOMER_STATUS_TYPES, SERVICE_STATUS_TYPES } from "@/libs/constants";

const keyRenders = {
  customers: {
    label: "Khách Hàng",
    title: ["customer_id", "customer_company_name", "customer_name"],
    description: "customer_email",
    id: "customer_id",
    collections: CUSTOMER_STATUS_TYPES,
  },
  services: {
    label: "Dịch Vụ",
    title: ["service_id", "service_name", "service_domain"],
    description: [
      "service_customer_id",
      "customer_company_name",
      "customer_name",
    ],
    id: "service_id",
    collections: SERVICE_STATUS_TYPES,
  },
};

const SearchResults = ({ response }) => {
  return (
    <Box px={2}>
      {Object?.keys(response?.results)?.map((item) => (
        <Box>
          <Typography
            sx={{
              position: "sticky",
              fontSize: 14,
              fontWeight: "medium",
              top: 55,
              backgroundColor: "#fff",
              py: 0.5,
            }}
            color="text.black"
          >
            {keyRenders[item]?.label}: {response?.queries?.results?.[item]}{" "}
            Matches
          </Typography>
          <Box mt={1}>
            {response?.results?.[item]?.map((p) => {
              const title =
                item === "customers"
                  ? `${p?.customer_id} - ${
                      p?.customer_company_name || p?.customer_name
                    }`
                  : `${p?.service_id} - ${p?.service_name} ${
                      p?.service_domain ? `(${p?.service_domain})` : ""
                    }`;

              const description =
                item === "customers"
                  ? `${p?.customer_email}`
                  : `${p?.service_customer_id} - ${
                      p?.customer_company_name || p?.customer_name
                    }`;

              return (
                <SearchCard
                  title={title}
                  description={description}
                  item={item}
                  status={
                    item === "customers"
                      ? p?.customer_status
                      : p?.service_status
                  }
                  id={p?.[keyRenders?.[item]?.id]}
                  collections={keyRenders?.[item]?.collections}
                />
              );
            })}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SearchResults;
