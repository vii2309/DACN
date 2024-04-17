import { AccountBoxOutlined, ChevronRightOutlined } from "@mui/icons-material";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FaceRetouchingNaturalOutlinedIcon from "@mui/icons-material/FaceRetouchingNaturalOutlined";
import Filter9PlusOutlinedIcon from "@mui/icons-material/Filter9PlusOutlined";
import AttachFileIcon from "@mui/icons-material/FolderOpenOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import InsertChartOutlinedRoundedIcon from "@mui/icons-material/InsertChartOutlinedRounded";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOffOutlinedIcon from "@mui/icons-material/PersonOffOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { List, Paper, Popper, Tooltip } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "../Menu/ListItem";
import ListItemIcon from "../Menu/ListItemIcon";
import ListItemText from "../Menu/ListItemText";

export const Icons = {
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
};

const MenuCollapse = ({ sidebars = [], handleSidebar,
  onCollapse,
  handleCollapse
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event, sidebar) => {

    if (onCollapse === sidebar?.name) {
      handleCollapse(null)
    } else {
      handleCollapse(sidebar?.name);
    }
    return setAnchorEl(event.currentTarget);
  };
  const handleMouseLeave = (event) => {
    event.preventDefault();
    setAnchorEl(null);
  };
  return (
    <List
      component="nav"
      aria-labelledby="sidebar-list"
      sx={{
        width: "100%",
        display: { xs: "none", md: "unset" },
      }}
    >
      <ListItem
        onClick={handleSidebar}
        sx={{
          mb: 8,
          pointerEvents: { xs: "none", md: "auto" },
        }}
      >
        <ListItemIcon title="Open sidebar">
          <ChevronRightOutlined sx={{ fontSize: 20 }} />
        </ListItemIcon>
      </ListItem>
      {sidebars?.map((sidebar, index) => {
        if (sidebar?.isHighLevel) {
          const isActive = sidebar?.childrens?.find(
            (ele) => ele?.path === window?.location?.pathname
          );
          return (
            <React.Fragment key={index}>
              <Tooltip title={sidebar?.title} placement="right">
                <ListItem
                  sx={{ bgcolor: isActive ? "#BFBFBF5F" : undefined }}
                  onClick={(event) => handleClick(event, sidebar)}
                >
                  <ListItemIcon>
                    {React.createElement(Icons[sidebar.icon], {
                      sx: { fontSize: 20 },
                    })}
                  </ListItemIcon>
                </ListItem>
              </Tooltip>
              {(onCollapse === sidebar?.name) && (
                <Popper
                  open={open}
                  anchorEl={anchorEl}
                  onMouseLeave={handleMouseLeave}
                >
                  <Paper sx={{ ml: "60px", mt: "-35px", padding: "10px" }}>
                    {sidebar?.childrens.map((item, index) => (
                      <ListItem
                        component={NavLink}
                        exact={(item.path === "/").toString()}
                        to={item.path}
                        replace
                        key={index}
                      >
                        <ListItemText primary={item.title} />
                      </ListItem>
                    ))}
                  </Paper>
                </Popper>
              )}
            </React.Fragment>
          );
        }
        return (
          <Tooltip title={sidebar?.title} placement="right" key={index}>
            <ListItem
              component={NavLink}
              exact={(sidebar?.path === "/").toString()}
              to={sidebar?.path}
              replace
            >
              <ListItemIcon>
                {React.createElement(
                  Icons[sidebar?.icon] || Icons["Dashboard"],
                  {
                    sx: { fontSize: 20 },
                  }
                )}
              </ListItemIcon>
            </ListItem>
          </Tooltip>
        );
      })}
    </List>
  );
};

export default MenuCollapse;
