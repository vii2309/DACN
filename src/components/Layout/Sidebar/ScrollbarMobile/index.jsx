import DashboardOutlined from '@mui/icons-material/DashboardOutlined'
import { Box, IconButton, List, Paper, Popover, Popper, Tooltip } from '@mui/material'
import { indigo } from '@mui/material/colors'
import React from 'react'
import { NavLink } from 'react-router-dom'
import ListItem from '../Menu/ListItem'
import ListItemIcon from '../Menu/ListItemIcon'
import ListItemText from '../Menu/ListItemText'
import { Icons } from '../MenuCollapse'

const ScrollbarMobile = ({ sidebars = [] }) => {
    const [popper, setOpen] = React.useState(false)
    const ref = React.useRef()

    const [menuDropDowns, setMenuDropDowns] = React.useState([])
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl)

    const handleClick = (event, sidebar) => {
        if (menuDropDowns?.includes(sidebar.name)) {
            setMenuDropDowns([])
        } else {
            setMenuDropDowns([sidebar?.name])
        }
        return setAnchorEl(event.currentTarget);
    };
    const handleMouseLeave = (event) => {
        event.preventDefault();
        setAnchorEl(null)
    }
    return (
        <React.Fragment>
            <Box
                ref={ref}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '100%',
                    zIndex: {
                        xs: 10, md: 1
                    }
                }}>
                <IconButton size='small'
                    onClick={() => {
                        setOpen(prev => !prev)
                    }}
                    sx={{
                        m: 'auto 0',
                        color: popper ? indigo[900] : "#777680",
                        transform: popper ? 'rotate(-180deg)' : 'unset',
                        transition: 'all 0.5s ease-in-out'
                    }}>
                    <DashboardOutlined fontSize='small' />
                </IconButton>
            </Box>
            <Popover
                open={popper}
                onClose={() => setOpen(false)}
                anchorEl={ref} sx={{
                    zIndex: 10,
                    opacity: popper ? 1 : 0,
                    top: 0,
                    position: "fixed",
                    left: 0,
                    transition: 'all 1.5s ease-in-out'
                }}>
                <Paper sx={{ p: "8px 16px" }}>
                    <List component='nav' aria-labelledby='sidebar-list' sx={{
                        width: '100wh',
                    }}>
                        {sidebars?.map((sidebar, index) => {
                            if (sidebar?.isHighLevel) {
                                const isActive = sidebar?.childrens?.find(ele => (ele?.path === window?.location?.pathname))
                                return (
                                    <React.Fragment key={index}>
                                        <Tooltip title={sidebar?.title}
                                            placement="right"
                                        >
                                            <ListItem
                                                sx={{ bgcolor: isActive ? '#BFBFBF5F' : undefined }}
                                                onClick={(event) => handleClick(event, sidebar)}
                                            >
                                                <ListItemIcon>
                                                    {React.createElement(Icons[sidebar.icon], {
                                                        sx: { fontSize: 20 },
                                                    })}
                                                </ListItemIcon>
                                            </ListItem>
                                        </Tooltip>
                                        {menuDropDowns?.includes(sidebar?.name) &&
                                            <Popper open={open}
                                                anchorEl={anchorEl}
                                                sx={{ zIndex: 11 }}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <Paper sx={{ ml: '60px', mt: '-35px', padding: '10px' }}>
                                                    {sidebar?.childrens.map((item, index) =>
                                                        <ListItem
                                                            component={NavLink}
                                                            exact={(item.path === '/').toString()}
                                                            to={item.path}
                                                            replace
                                                            key={index}
                                                        >
                                                            <ListItemText primary={item.title} />
                                                        </ListItem>
                                                    )}
                                                </Paper>
                                            </Popper>}
                                    </React.Fragment>
                                )
                            }
                            return (
                                <Tooltip title={sidebar?.title}
                                    placement="right"
                                    key={index}
                                >
                                    <ListItem
                                        component={NavLink}
                                        exact={(sidebar?.path === '/').toString()}
                                        to={sidebar?.path}
                                        replace
                                    >
                                        <ListItemIcon>
                                            {React.createElement(Icons[sidebar?.icon] || Icons["Dashboard"], {
                                                sx: { fontSize: 20 },
                                            })}
                                        </ListItemIcon>
                                    </ListItem>
                                </Tooltip>
                            )

                        })}
                    </List>
                </Paper>
            </Popover>
        </React.Fragment>
    )
}

export default ScrollbarMobile