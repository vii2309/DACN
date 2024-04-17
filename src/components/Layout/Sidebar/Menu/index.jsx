"use client";
import React from "react";
import { List } from "@mui/material";
import Link from "next/link";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import FaceRetouchingNaturalOutlinedIcon from "@mui/icons-material/FaceRetouchingNaturalOutlined";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Filter9PlusOutlinedIcon from "@mui/icons-material/Filter9PlusOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import AttachFileIcon from "@mui/icons-material/FolderOpenOutlined";
import DiamondIcon from "@mui/icons-material/Diamond";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ListItem from "./ListItem";
import ListItemIcon from "./ListItemIcon";
import ListItemText from "./ListItemText";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AccountBoxOutlined } from "@mui/icons-material";
import { ListItemIcon as MuiListItemIcon } from "@mui/material";

const Icons = {
  Dashboard: DashboardOutlinedIcon,
  Service: StorefrontOutlinedIcon,
  Invoice: ReceiptOutlinedIcon,
  Customer: FaceRetouchingNaturalOutlinedIcon,
  CustomerSpam: PersonOffOutlinedIcon,
  Employee: PeopleAltOutlinedIcon,
  Contract: ArticleOutlinedIcon,
  PartnerContract: BusinessCenterOutlinedIcon,
  SampleContract: InsertDriveFileOutlinedIcon,
  ContractNumber: Filter9PlusOutlinedIcon,
  PostmanTracking: EmailOutlinedIcon,
  Warehouse: HomeWorkOutlinedIcon,
  Question: InterestsOutlinedIcon,
  Report: InsertChartOutlinedRoundedIcon,
  Setting: SettingsOutlinedIcon,
  Account: AccountBoxOutlined,
  Helper: SupportAgentOutlinedIcon,
  AttachFileIcon: AttachFileIcon,
  DiamondIcon: DiamondIcon,
};

const SIDEBARS = [
  {
    path: "products",
    title: "Sản Phẩm",
    icon: "Service",
  },
  {
    path: "invoices",
    title: "Hoá Đơn",
    icon: "Invoice",
  },
  {
    path: "customers",
    title: "Khách Hàng",
    icon: "Customer",
  },
];
const SidebarMenu = ({ sidebars = SIDEBARS }) => {
  return (
    <List component="nav" aria-labelledby="sidebar-list" sx={{ width: "100%" }}>
      {SIDEBARS?.map((sidebar, index) => {
        {
          /* if (sidebar?.isHighLevel) {
          const isActive = sidebar?.childrens?.find(
            (ele) => ele.path === window?.location?.pathname
          );
          return (
            <React.Fragment key={index}>
              <ListItem
                sx={{
                  bgcolor: isActive ? "#BFBFBF5F" : undefined,
                }}
              >
                <ListItemIcon>
                  {React.createElement(Icons[sidebar.icon], {
                    sx: { fontSize: 20 },
                  })}
                </ListItemIcon>
                <ListItemText primary={sidebar.title} />
                <MuiListItemIcon
                  sx={{
                    m: "auto 0 auto auto",
                    minWidth: 20,
                    width: 20,
                  }}
                ></MuiListItemIcon>
              </ListItem>
              {onCollapse === sidebar.name &&
                sidebar?.childrens.map((item, index) => (
                  <ListItem
                    component={NavLink}
                    exact={(item.path === "/").toString()}
                    to={item.path}
                    replace
                    key={item?.name + index}
                    sx={{ height: 36 }}
                  >
                    <ListItemText
                      primary={item.title}
                      sx={{ pl: 4.5, fontSize: 13 }}
                    />
                  </ListItem>
                ))}
            </React.Fragment>
          );
        } */
        }
        return (
          <ListItem
            component={Link}
            exact={(sidebar.path === "/").toString()}
            to={sidebar.path}
            replace
            key={index}
          >
            <ListItemIcon>
              {React.createElement(Icons[sidebar.icon], {
                sx: { fontSize: 20 },
              })}
            </ListItemIcon>
            <ListItemText primary={sidebar.title} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default SidebarMenu;
